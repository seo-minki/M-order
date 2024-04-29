import Image from "next/image";
import Bill from "@/app/pages/bill/page";

export default function Home() {
  return (
    <div className="bg-neutral-100 min-h-screen flex justify-center px-5">
      <Bill></Bill>
    </div>
  );
}
