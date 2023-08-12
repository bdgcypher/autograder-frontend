/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import EditableRubric from "@/components/Dashboard/CreateAssignment/EditableRubric";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen h-full p-4 flex-col items-center justify-between bg-slate-50 ${inter.className}`}
    >
      <div className="mt-20 p-4 bg-white rounded">
        <EditableRubric />
      </div>
    </main>
  );
}
