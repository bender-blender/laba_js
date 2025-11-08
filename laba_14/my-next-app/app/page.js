import Link from "next/link";
import Image from "next/image";
import bg from "./bg.png";
import Navigation from "../_components/Navigation";

export const metadata = {
  title: "Home | Wild Oasis",
  description: "Welcome to Wild Oasis — luxury cabins in nature",
};

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <Navigation />
      <Image src={bg} alt="Mountains" fill className="object-cover -z-10" placeholder="blur" />
      <div className="relative z-10 text-center mt-32">
        <h1 className="text-6xl mb-10 font-semibold text-primary-50">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-4 text-primary-900 font-semibold hover:bg-accent-600 transition-all"
        >
          Explore Cabins
        </Link>
      </div>
    </main>
  );
}
