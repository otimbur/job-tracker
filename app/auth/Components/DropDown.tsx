import { signOut } from "next-auth/react";

export default function DropDown() {
  return (
    <button
      onClick={() => signOut()}
      className="text-base bg-green-200 rounded-xl px-5 py-0"
    >
      Sign Out
    </button>
  );
}
