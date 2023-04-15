import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Try = () => {
  return (
    <div className="mx-20 max-w-4xl md:mx-auto">
      <Navbar />
      <div className="grid place-items-center min-h-[calc(100vh-5rem-2.5rem)]">
        <div className="flex flex-col gap-8 items-center">
          <h1 className="text-6xl font-bold text-zinc-300">🚧 Coming Soon</h1>
          <Link href="/" className="group">
            <Button>
              <span className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 transition group-hover:translate-x-[-12px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
                Go Back Home
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Try;
