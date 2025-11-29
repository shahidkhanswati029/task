"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Logging in...", { id: "login" });

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    toast.dismiss("login");

    if (!res.ok) {
      toast.error(data.error || "Login failed");
    } else {
      // localStorage.setItem("token", data.token); // save JWT
      toast.success("Login successful!");
      router.push("/");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96 bg-white p-8 shadow-xl rounded-xl">
          <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-green-400"
            required
          />
          <button type="submit" className="bg-green-600 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all">
            Login
          </button>
          <p>don't have an account? <span className="text-green-900 cursor-pointer"><Link href="/auth/register">register</Link></span></p>
        </form>
      </div>
    </>
  );
}
