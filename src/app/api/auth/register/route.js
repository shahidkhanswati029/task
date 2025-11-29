import clientPromise from "@/lib/mongodb"; // default import
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return new Response(JSON.stringify({ error: "All fields are required" }), { status: 400 });
    }
    console.log("test1")

    const client = await clientPromise;
    console.log("test2")
    const db = client.db();
    console.log("test3")

    const existingUser = await db.collection("users").findOne({ email });
    console.log("test4")
    if (existingUser) return new Response(JSON.stringify({ error: "User exists" }), { status: 400 });
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await db.collection("users").insertOne({ name, email, password: hashedPassword });
    return new Response(JSON.stringify({ message: "User created", userId: result.insertedId }), { status: 201 });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: "Something went wrong" }), { status: 500 });
  }
}
