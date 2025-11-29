import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";

// Create user
export async function createUser({ name, email, password }) {
  const client = await clientPromise;
  const db = client.db();
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await db.collection("users").insertOne({ name, email, password: hashedPassword });
  return { message: "User created", userId: result.insertedId };
}

// Find user by email
export async function findUserByEmail(email) {
  const client = await clientPromise;
  const db = client.db();

  return db.collection("users").findOne({ email });
}
