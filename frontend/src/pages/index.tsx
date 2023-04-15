import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-20 max-w-4xl md:mx-auto my-20">
      <nav className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-indigo-600">CrimeClix</h1>
        </div>
        <div>
          <span className="text-stone-500 font-light">
            By Team <span className="font-pixel">Pixils</span> 🫰
          </span>
        </div>
      </nav>
      <main className="mt-16">
        <div className="text-7xl mb-8">🚨</div>
        <h1 className="text-6xl font-bold text-stone-800">
          Create{" "}
          <mark className="bg-transparent shadow-[inset_0_-0.5em_0_0_#818cf8]">
            portraits
          </mark>{" "}
          of criminals from textual descriptions
        </h1>
        <div className="flex justify-center w-full mt-12">
          <button className="text-white px-12 py-3 font-lg font-semibold rounded-2xl bg-gradient-to-tr from-indigo-500 to-indigo-700 hover:from-indigo-500 hover:to-indigo-800 shadow-2xl shadow-stone-800/30 transition hover:scale-110">
            Try Now!
          </button>
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
      <footer className="mt-40 text-center text-zinc-500 flex flex-col gap-3">
        <div>
          Made with ❤️ by <span className="font-pixel">Pixils</span>
        </div>
        <div>
          incubated at{" "}
          <a
            href="https://hackowasp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="inline"
              src="/hackowasp.png"
              alt="Hackowasp"
              width={50}
              height={100}
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
