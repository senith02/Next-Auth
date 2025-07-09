'use client';
import { auth } from "./auth";
import { SignInButton } from "./components/sign-in-button";
import { logout } from "./lib/actions/auth";

export default async function Home() {
  const session = await auth();
  console.log(session);

  if (session?.user )  {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.name}!</h1>
        <h2>user email: {session.user.email}</h2>
        <p className="mb-4">You are signed in.</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={() => logout()}>
          Sign Out
        </button>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <p>You are not signed In</p>
      <SignInButton />
    </div>
  );
}
