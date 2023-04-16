import Image from "next/image";

interface OutputProps {
  output: string[];
}

const ImageGrid = ({ output }: OutputProps) => {
  return (
    <div className="grid grid-cols-3 gap-2 place-items-center h-full">
      {output.map((src) => (
        <Image key={src} src={'https://w3s.link/ipfs/' + src} className="rounded-xl" alt="output" width={256} height={256} />
      ))}
    </div>
  );
};

export default ImageGrid;
