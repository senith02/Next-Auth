'use client';
import { login } from "./lib/actions/auth";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <p>You are not signed In</p>
      <button onClick={() => login()}>Sign in with GitHub</button>
    </div>
  );
}
