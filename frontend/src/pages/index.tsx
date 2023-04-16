import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-20 mb-32 max-w-4xl md:mx-auto">
      <Navbar />
      <main className="mt-16">
        {/* <div className="text-7xl mb-8">🚨</div> */}
        <Image
          src="/weeWooweeWoo.png"
          alt="weeWooweeWoo"
          width={85}
          height={85}
          className="mb-8"
        />
        <h1 className="text-6xl font-bold text-stone-800">
          Create{" "}
          <mark className="bg-transparent shadow-[inset_0_-0.5em_0_0_#818cf8]">
            portraits
          </mark>{" "}
          of criminals from textual descriptions
        </h1>
        <h2 className="text-3xl font-semibold mt-6">
          and store them permanently on IPFS
        </h2>
        <div className="flex justify-center w-full mt-12">
          <Link href="/try">
            <Button>Try Now!</Button>
          </Link>
        </div>
        <div className="w-full mt-20 px-16 py-40 bg-indigo-300 rounded-3xl flex items-center justify-evenly shadow-2xl shadow-stone-800/30">
          <span className="bg-white p-10 w-48 rounded-2xl font-handwritten shadow-2xl shadow-stone-800/30 transition hover:scale-110">
            “wears a black cap and a gold chain...”
          </span>
          <Image src="/arrow.png" alt="" width="200" height="100" />
          <span className="rounded-2xl shadow-2xl shadow-stone-800/30 overflow-hidden transition hover:scale-110">
            <Image src="/criminal.png" alt="" width="200" height="200" />
          </span>
        </div>
      </main>
      <Footer />
    </div>
  );
}
