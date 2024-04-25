import Image from "next/image";
import { database } from "@/firebase";
import { push, ref, set, child } from "firebase/database";
import { useState } from "react";

const NewsLetter = ({ chocolates }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitEmail = (e) => {
    e.preventDefault();
    const email = e?.target?.elements?.email?.value?.trim() ?? "";

    if (email) {
      const date = new Date();
      const data = {
        email,
        date: date.toLocaleDateString(),
        chocolates,
      };

      const uniqueKey = push(child(ref(database), "users")).key;
      set(ref(database, "users/" + uniqueKey), data).then(() =>
        setSubmitted(true),
      );
    }
  };

  if (submitted) {
    return (
      <div className="mb-2 text-center text-2xl">
        Thank you for subscribing to our emails!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmitEmail}>
      <div className="mb-2 text-center text-2xl">Subscribe to our emails</div>

      <div className="mx-auto flex max-w-sm items-center gap-2 border-b border-b-primary md:max-w-xl">
        <input
          type="email"
          name="email"
          className="w-full px-2 py-2 text-xl focus-visible:outline-none"
          placeholder="Email"
          required
        />
        <button className="px-4">
          <Image
            src="/assets/icons/arrow.svg"
            alt="Submit"
            width={14}
            height={7}
            className="h-6 w-6"
          />
        </button>
      </div>
    </form>
  );
};

export default NewsLetter;
