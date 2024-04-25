import { auth, signInWithEmailAndPassword } from "@/firebase";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e?.target?.elements?.email?.value?.trim() ?? "";
    const password = e?.target?.elements?.password?.value?.trim() ?? "";

    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          setError("");
        })
        .catch((error) => {
          //   const errorMessage = error.message;
          setError("Invalid email or password!");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <>
      <div className="flex flex-1 flex-col justify-center rounded-lg px-6 py-10 shadow-md lg:px-8">
        <div className="w-full">
          <div className="mb-2 text-center text-2xl">
            Please login if you are an admin
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-primary"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full rounded-full border-2 border-primary px-2 py-2 text-xl focus-visible:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium leading-6 text-primary"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="w-full rounded-full border-2 border-primary px-2 py-2 text-xl focus-visible:outline-none"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-full border-2 border-primary bg-primary px-4 py-2 text-xl font-semibold leading-6 text-light shadow-sm transition-colors ease-primary hover:bg-light hover:text-primary"
              >
                {loading ? "Signing in..." : "Sign in"}
              </button>
            </div>
            {error && (
              <p className="mt-2 text-center text-lg text-primary">{error}</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
