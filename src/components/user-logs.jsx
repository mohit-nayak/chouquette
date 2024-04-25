"use client";

import { useEffect, useState } from "react";
import { database } from "@/firebase";
import { ref, child, get } from "firebase/database";
import Image from "next/image";
import { motion } from "framer-motion";

const UserLogs = () => {
  const [data, setData] = useState(null);

  const fetchUserLogs = () => {
    const dbRef = ref(database);
    get(child(dbRef, `users`))
      .then((snapshot) => {
        setData(snapshot.val());
      })
      .catch((error) => {
        // console.error(error);
      });
  };

  useEffect(() => {
    fetchUserLogs();
  }, []);

  if (!data) {
    return <div className="text-center text-2xl">Loading...</div>;
  }

  const dataKeys = Object.keys(data);
  if (dataKeys && [dataKeys]?.length < 1) {
    return <div className="text-center text-2xl">No users data!</div>;
  }

  return (
    <div className="mb-6 space-y-6">
      <h2 className="text-center text-2xl">Users</h2>
      {dataKeys?.map((key, index) => {
        const user = data[key];
        return (
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 + 0.15 * index }}
            key={key}
            className="items-center justify-between gap-6 rounded-3xl border-2 border-primary px-4 py-2 shadow-md lg:flex"
          >
            <div className="mb-2 items-center gap-4 text-xl md:flex lg:mb-0">
              <div>{user.date}</div> <span className="hidden md:block">-</span>
              <div className="truncate">{user?.email?.toLowerCase()}</div>
            </div>
            <div className="flex gap-4 overflow-x-auto ">
              {user.chocolates.map((chocolate, index) => (
                <Image
                  key={index}
                  src={`/assets/images/chocolates/${chocolate?.image ?? "almond.png"}`}
                  alt={chocolate?.name ?? ""}
                  width={100}
                  height={100}
                  className="h-16 w-16 md:h-20 md:w-20"
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default UserLogs;
