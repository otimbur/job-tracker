"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <li className="list-none">
      <button
        onClick={() => signIn()}
        className="text-base bg-green-300 rounded-xl px-5 py-2"
      >
        Sign In
      </button>
    </li>
  );
}
