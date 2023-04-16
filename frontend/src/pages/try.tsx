import Button from "@/components/Button";
import Navbar from "@/components/Navbar";
import Output from "@/components/Output";
import axios from "axios";
import { useState } from "react";

const Try = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const text2Image = async (prompt: string) => {
    console.log("Generating images");
    setStatus("loading");

    const updatedPrompt = `${prompt}, portrait, realistic, looking at the camera`

    const {
      data: { output },
    } = await axios.post("https://stablediffusionapi.com/api/v3/text2img", {
      key: "c7dKHZ709uP1N6yRp1mS8F3ALK3CrldPfuIPfnwSz7rML1mqjiOPGQ1SiixI",
      prompt: updatedPrompt,
      width: 256,
      height: 256,
      samples: 3,
      promptStrenght: 20,
    });

    console.log(output);
    setOutput(output);
    setStatus("idle");
  };

  return (
    <div className="mx-20 max-w-4xl md:mx-auto">
      <Navbar />
      <div className="bg-white rounded-2xl p-10 mt-12">
        <div className="flex justify-stretch gap-10 mb-10">
          <textarea
            className="bg-zinc-100 p-10 rounded-xl"
            placeholder="Enter your description of criminal here..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            cols={30}
            rows={10}
          ></textarea>
          <div>
            <Output status={status} output={output} />
          </div>
        </div>
        <Button onClick={() => text2Image(prompt)}>Generate</Button>
      </div>
    </div>
  );
};

export default Try;
