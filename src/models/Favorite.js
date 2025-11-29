import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

// Get favorites of a user
export async function getFavorites(userId) {
  const client = await clientPromise;
  const db = client.db();

  const fav = await db.collection("favorites").findOne({ userId: new ObjectId(userId) });
  return fav ? fav.songs : [];
}

// Add a favorite song for a user
export async function addFavorite(userId, songName) {
  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection("favorites").updateOne(
    { userId: new ObjectId(userId) },
    { $addToSet: { songs: songName } }, // $addToSet prevents duplicates
    { upsert: true }
  );

  return result;
}

// Remove a favorite song
export async function removeFavorite(userId, songName) {
  const client = await clientPromise;
  const db = client.db();

  const result = await db.collection("favorites").updateOne(
    { userId: new ObjectId(userId) },
    { $pull: { songs: songName } }
  );

  return result;
}
