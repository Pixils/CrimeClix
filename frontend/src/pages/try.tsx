import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Output from "@/components/Output";
import axios from "axios";
import { useState } from "react";

const Try = () => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [uploadStatus, setUploadStatus] = useState(false);

  const text2Image = async (prompt: string) => {
    console.log("Generating image");
    setStatus("loading");
    setUploadStatus(false);

    const updatedPrompt = `${prompt}, adult, portrait, realistic, looking at the camera`;

    const {
      data,
    } = await axios.post("https://stablediffusionapi.com/api/v3/text2img", {
      key: "4Axf7oGUonA0g1lHSVtZoau2JWDToCMUWn0OD571xT0MwTxTYJcZq68Jwaan",
      prompt: updatedPrompt,
      width: 512,
      height: 512,
      samples: 1,
      promptStrenght: 20,
    });

    setOutput(data.output[0]);
    setStatus("idle");
  };

  const uploadToIPFS = async () => {
    try {
      await axios.post("http://127.0.0.1:5001/portraits/", {
        portrait: output,
      });

      setUploadStatus(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mx-20 max-w-4xl md:mx-auto mb-40">
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
          <div className="grid place-content-center w-full">
            <Output status={status} src={output} />
          </div>
        </div>
        <div className="flex gap-3 justify-between">
          <Button onClick={() => text2Image(prompt)}>Generate</Button>
          <span>
            {uploadStatus && <span className="mr-5">Uploaded to IPFS</span>}
            <Button onClick={() => uploadToIPFS()}>Upload to IPFS</Button>
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Try;
