import React from "react";

export default function Signup() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Sign Up
        </h2>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Create a password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-black py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Sign Up
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-orange-400 hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
