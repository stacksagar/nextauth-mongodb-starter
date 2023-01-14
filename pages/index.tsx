import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useAuthContext, useAuthContextType } from "../context/AuthContext";
import { useEffect } from "react";

export default function Home() {
  const { data: session } = useSession<any>();
  const { state, dispatch }: useAuthContextType = useAuthContext();

  function signOutHandle() {
    signOut();
  }

  useEffect(() => {
    console.log("state ", state.user?._id);
  }, [state]);

  return (
    <div className="container p-6">
      {session ? (
        <div>
          <div className="flex gap-x-4 items-center">
            <small>Hooray you're logged in!!</small>

            <p className="p-5 text-blue-500 underline">
              <Link href="/protected-route">Visit Protected Route</Link>
            </p>

            <button onClick={signOutHandle}>SignOut</button>
          </div>

          <div className="flex gap-x-4">
            <img
              className="w-12 h-12 rounded-full"
              src={state.user?.image}
              alt=""
            />
            <div>
              <p> {state?.user?.name}</p>
              <p> {state?.user?.email}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-5 p-5 text-xl text-blue-500">
          <small>Please signin, first!</small>

          <Link href="/login">Login</Link>
          <Link href="/signup">Signup</Link>
        </div>
      )}
    </div>
  );
}
