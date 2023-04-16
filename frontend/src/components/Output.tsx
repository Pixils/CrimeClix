import Image from "next/image";

interface OutputProps {
  src: string | undefined;
  status: "idle" | "loading";
}

const Output = ({ src, status }: OutputProps) => {
  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "idle" && !src) {
    return <div></div>;
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
