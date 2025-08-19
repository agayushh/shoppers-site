import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resposne = await axios.post(
        "http://localhost:8000/api/user/login",
        { email, password }
      );
      console.log(`loggedIn user: ${resposne.data}`);
      if (resposne.data?.user?._id) {
        localStorage.setItem("username", resposne.data.user.name);
        navigate("/");
      } else {
        setError(resposne.error || "Login Failed");
      }
    } catch (error) {
      console.log("Login error", error);
      setError(
        error.response?.data?.message || "something went wrong while logging in"
      );
    }
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-zinc-900 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-orange-400 mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-black py-2 rounded-lg font-medium transition-colors duration-200"
          >
            Login
          </button>

          <p className="text-sm text-gray-400 text-center mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange-400 hover:underline">
              Sign up
            </a>
          </p>
        </form>
        {error && (
          <p className="text-sm text-red-400 text-center mt-4">{error}</p>
        )}
      </div>
    </section>
  );
}
