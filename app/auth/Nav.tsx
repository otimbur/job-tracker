import Link from "next/link";
import Login from "./Login";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../pages/api/auth/[...nextauth]";
import Logged from "./Logged";

export default async function Nav() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="flex justify-between items-center py-6">
      <Link href={"/"}>
        <h1>Send it.</h1>
      </Link>
      <ul className="flex items-center">
        {/* If we are on the loggin page the login would be displaied, else the Sign Out*/}
        {!session?.user && <Login />}
        {session?.user && <Logged image={session.user?.image || " "} />}
      </ul>
    </nav>
  );
}
