import Image from "next/image";
import { MoonLoader } from "react-spinners";

interface OutputProps {
  src: string | undefined;
  status: "idle" | "loading";
}

const Output = ({ src, status }: OutputProps) => {
  if (status === "loading") {
    return <MoonLoader color="#4f46e5" />;
  }

  if (status === "idle" && !src) {
    return <h1 className="font-semibold">Write the description and a portraint will appear here</h1>;
  }

  return (
    <div>
      <Image
        key={src}
        src={src!}
        className="rounded-3xl"
        alt="output"
        width={512}
        height={512}
      />
    </div>
  );
};

export default Output;
