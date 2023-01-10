import { signIn } from "next-auth/react";
import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="container py-8 px-8">
        <div className="h-12">
          <button
            onClick={signIn}
            className="rounded bg-blue-600 text-white px-6 py-2 font-semibold"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
