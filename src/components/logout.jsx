"use client"

import { auth } from "@/firebase";

const Logout = ({ onLogoutSuccess }) => {
  const handleSignOut = () => {
    auth.signOut().then(() => {
      onLogoutSuccess();
    });
  };

  return (
    <div>
      <button
        onClick={handleSignOut}
        className="text-primary-light hover:underline"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
