import { useState } from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import axios from "axios";

import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Output from "@/components/Output";
import Link from "next/link";

interface TryProps {
  host: string;
}

const Try = ({ host }: TryProps) => {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState<string | undefined>(undefined);
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [uploadStatus, setUploadStatus] = useState<
    "idle" | "uploading" | "successful" | "error"
  >("idle");

  const text2Image = async (prompt: string) => {
    setStatus("loading");

    const updatedPrompt = `${prompt}, adult, portrait, realistic, looking at the camera`;

    const { data } = await axios.post(
      "https://stablediffusionapi.com/api/v3/text2img",
      {
        key: "4Axf7oGUonA0g1lHSVtZoau2JWDToCMUWn0OD571xT0MwTxTYJcZq68Jwaan",
        prompt: updatedPrompt,
        width: 512,
        height: 512,
        samples: 1,
        promptStrenght: 20,
      }
    );

    setOutput(data.output[0]);
    setStatus("idle");
  };

  const uploadToIPFS = async () => {
    setUploadStatus("uploading");
    try {
      await axios.post("http://127.0.0.1:5001/portraits/", {
        portrait: output,
      });
      setUploadStatus("successful");
    } catch (err) {
      console.error(err);
      setUploadStatus("error");
    }
  };

  return (
    <div className="mx-20 max-w-4xl md:mx-auto mb-40">
      <Navbar />
      {host === "localhos" || host === "127.0.0.1" ? (
        <div className="bg-white rounded-2xl p-10 mt-12 min-h-[520px]">
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
              <span className="font-semibold">
                {uploadStatus === "successful" ? (
                  <span className="mr-5 text-teal-500">
                    successfully uploaded to IPFS
                  </span>
                ) : uploadStatus === "error" ? (
                  <span className="mr-5 text-rose-500">An Error occured</span>
                ) : null}
              </span>
              {output && (
                <Button onClick={() => uploadToIPFS()}>
                  {uploadStatus === "uploading" ? "Loading..." : "Upload"}
                </Button>
              )}
            </span>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          <div className="bg-white rounded-2xl p-10 mb-5">
            <Image
              src="/sad.png"
              className="mb-6"
              alt="sad"
              width={60}
              height={60}
            />
            <h1 className="text-4xl font-bold mb-5">
              We are extremely sorry but we cannot show you the demo on this
              deployed website.
            </h1>
            <h2 className="text-xl font-semibold">
              However, you can view the demo on our local server.
            </h2>
            <p className="mt-3">
              This is because, one of the API our service depends on is not CORS
              enabled.
            </p>
          </div>
          <Link href="/">
            <Button>
              <span className="flex gap-3 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 transition group-hover:translate-x-[-8px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Go Back Home</span>
              </span>
            </Button>
          </Link>
        </div>
      )}
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      host: context.req.headers.host?.split(":")[0],
    },
  };
};

export default Try;
