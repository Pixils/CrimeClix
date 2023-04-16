import Image from "next/image";

interface OutputProps {
  output: string[];
  status: "idle" | "loading";
}

const Output = ({ output, status }: OutputProps) => {
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "idle" && output.length === 0) {
    return <div></div>
  }

  return (
    <div className="grid grid-cols-3 gap-5 place-items-center h-full">
      {output.map((src) => (
        <Image key={src} src={'https://w3s.link/ipfs/' + src} className="rounded-3xl" alt="output" width={256} height={256} />
      ))}
    </div>
  );
};

export default Output;
