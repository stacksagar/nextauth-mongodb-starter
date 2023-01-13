import Link from "next/link";

import { useSession, signOut } from "next-auth/react";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession<any>();
  const { state } = useAuthContext();

  function signOutHandle() {
    signOut();
  }

  useEffect(() => {}, []);

  return (
    <div className="container p-6">
      {session ? (
        <div>
          <small>Hooray you're logged in!!</small>
          <p> {session?.user?.name}</p>
          <p> {session?.user?.email}</p>
          <p> {session?.user?.image}</p>
          <button onClick={signOutHandle}>SignOut</button>
        </div>
      ) : (
        <div className="flex gap-5 p-5 text-xl text-blue-500">
          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      )}
    </div>
  );
}
