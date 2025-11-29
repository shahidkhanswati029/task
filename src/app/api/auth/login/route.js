// app/api/auth/login/route.js
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: "Email and password required" }), { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection("users").findOne({ email });
    if (!user)
      return new Response(JSON.stringify({ error: "Invalid email or password" }), {
        status: 401,
      });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid)
      return new Response(JSON.stringify({ error: "Invalid email or password" }), {
        status: 401,
      });

    const token = jwt.sign(
      { id: user._id.toString(), email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return new Response(
      JSON.stringify({
        token,
        user: { id: user._id.toString(), name: user.name, email: user.email },
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return new Response(JSON.stringify({ error: "Server Error" }), { status: 500 });
  }
}
