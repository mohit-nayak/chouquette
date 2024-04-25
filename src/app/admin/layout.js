"use client";

import Login from "@/components/login";
import Logout from "@/components/logout";
import { auth } from "@/firebase";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminLayout({ children }) {
  const [authLoaded, setAuthLoaded] = useState(false);
  const [admin, setAdmin] = useState(null);

  auth.onAuthStateChanged((user) => {
    if (user) {
      setAdmin(user);
    }
    setAuthLoaded(true);
  });

  return (
    <motion.main
      initial={{ x: 60, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="flex flex-col items-center justify-between p-4"
    >
      <h1 className="text-center text-4xl">Admin area</h1>
      {admin && <Logout onLogoutSuccess={() => setAdmin(null)} />}
      {authLoaded ? (
        <>
          {admin ? (
            children
          ) : (
            <div className="mx-auto mt-6 w-full max-w-md">
              <Login />
            </div>
          )}
        </>
      ) : (
        <div className="mt-4 text-center text-xl">Checking auth...</div>
      )}
    </motion.main>
  );
}
