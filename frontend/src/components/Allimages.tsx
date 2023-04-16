import Image from "next/image";

interface OutputProps {
  output: string[];
}

const Output = ({ output }: OutputProps) => {
  console.log(output)
  return (
    <div className="grid grid-cols-3 gap-5 place-items-center h-full">
      {output.map((src) => (
        <Image key={src} src={'https://w3s.link/ipfs/' + src} className="rounded-3xl" alt="output" width={256} height={256} />
      ))}
    </div>
  );
};

export default Output;
