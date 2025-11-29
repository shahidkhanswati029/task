"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FavoritesPage() {
  const [songs, setSongs] = useState([]);
  const [newSong, setNewSong] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) return;
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    const res = await fetch("/api/favorites", {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await res.json();
    setSongs(data.songs || []);
  };

  const addSong = async () => {
    if (!newSong) return;
    const res = await fetch("/api/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ songName: newSong }),
    });
    const data = await res.json();
    if (data.songs) {
      setSongs(data.songs);
      setNewSong("");
      toast.success("Song added!");
    } else {
      toast.error(data.error || "Error adding song");
    }
  };

  const removeSong = async (song) => {
    const res = await fetch("/api/favorites", {
      method: "DELETE",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ songName: song }),
    });
    const data = await res.json();
    if (data.songs) setSongs(data.songs);
    else toast.error(data.error || "Error removing song");
  };

  return (
    <div className="p-8">
      <Toaster position="top-right" />
      <h1 className="text-2xl font-bold mb-4">My Favorite Songs</h1>

      <div className="flex gap-2 mb-4">
        <input
          value={newSong}
          onChange={(e) => setNewSong(e.target.value)}
          placeholder="Add a new song"
          className="border p-2 rounded-lg flex-1"
        />
        <button onClick={addSong} className="bg-green-600 text-white px-4 rounded-lg">
          Add
        </button>
      </div>

      <ul>
        {songs.map((song, index) => (
          <li key={index} className="flex justify-between items-center mb-2 border p-2 rounded-lg">
            {song}
            <button onClick={() => removeSong(song)} className="text-red-600 font-bold">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
