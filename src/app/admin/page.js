import UserLogs from "@/components/user-logs";

export default function AdminPage() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <h1 className="text-center text-4xl">Admin area</h1>
      <div className="mt-6 w-full max-w-lg lg:max-w-3xl">
        <UserLogs />
      </div>
    </main>
  );
}
