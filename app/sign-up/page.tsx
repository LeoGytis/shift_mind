"use client";
import { auth } from "@/utils/firebaseConfig";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      sessionStorage.setItem("user", "true");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="bg-bgligth flex min-h-screen items-center justify-center">
      <div className="bg-bggreen w-96 space-y-6 rounded-lg p-10 shadow-xl">
        <h1 className="!text-electric">SignUp</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded bg-white p-3 text-black placeholder-gray-500 outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded bg-white p-3 text-black placeholder-gray-500 outline-none"
        />
        <button
          onClick={handleSignUp}
          className="background-rainbow flex cursor-pointer rounded-lg px-5 py-1"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
