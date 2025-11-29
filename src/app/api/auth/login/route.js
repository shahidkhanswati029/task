import clientPromise from "@/lib/mongodb"; // default import
import { findUserByEmail } from "@/models/User";
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

    console.log(user)
    if (!user) return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });
      
      console.log(password, user.password, "user test")
const isValid = await bcrypt.compare(password.trim(), user.password);
console.log(isValid,"isvalid")
    if (!isValid) return new Response(JSON.stringify({ error: "Invalid email or password" }), { status: 401 });

    const token = jwt.sign({ id: user._id.toString(), email: user.email }, process.env.JWT_SECRET, { expiresIn: "7d" });

    return new Response(
      JSON.stringify({ token, user: { id: user._id.toString(), name: user.name, email: user.email } }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
