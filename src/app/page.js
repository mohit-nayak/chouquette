import ChoicesForm from "@/components/choices-form";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <div className="mx-auto max-w-3xl">
        <ChoicesForm />
      </div>
    </main>
  );
}
