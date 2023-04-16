import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import AllImages from "@/components/Allimages";
import axios from "axios";
import { useState, useEffect } from 'react'
import Footer from "@/components/Footer";

const Try = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  useEffect(() => {
    axios.get("http://localhost:5000/portraits/")
    .then((data) => {
        setOutput(data.data.data)
        setStatus("idle")
    })
  }, [])

  return (
    <div className="mx-20 max-w-4xl md:mx-auto">
      <Navbar />
      <div className="bg-white rounded-2xl p-10 mt-12">
        <h1 className="text-zinc-500 font-semibold text-3xl mb-4">All criminals</h1>
        <div className="flex justify-stretch gap-10 mb-10">
          <div>
            <AllImages status={status} output={output} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Try;
