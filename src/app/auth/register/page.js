"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import bcrypt from "bcryptjs";
import toast, { Toaster } from "react-hot-toast";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    toast.loading("Registering user...", { id: "register" });

    try {
      const hashedPassword = await bcrypt.hash(password, 10);

     const res = await fetch("/api/auth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, email, password }), // send plain password
});


      if (res.ok) {
        toast.success("Registered Successfully!", { id: "register" });
        setTimeout(() => router.push("/auth/login"), 1000);
      } else {
        toast.error("Error registering user", { id: "register" });
      }
    } catch (error) {
      toast.error("Something went wrong!", { id: "register" });
    }
  };

  return (
    <>
      <Toaster position="top-right" />

      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 w-96 bg-white p-8 shadow-xl rounded-xl"
        >
          <h1 className="text-3xl font-bold text-center mb-4">Create Account</h1>

          <input
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="border p-3 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-green-600 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
          >
            Register
          </button>

          <p className="text-center text-gray-500 text-sm">
            Already have an account?{" "}
            <a href="/auth/login" className="text-green-600 hover:underline cursor-pointer">
              Login
            </a>
          </p>
        </form>
      </div>
    </>
  );
}
