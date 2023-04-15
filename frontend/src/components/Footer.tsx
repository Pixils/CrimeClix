import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-40 text-center text-zinc-500 flex flex-col gap-3">
      <div>
        Made with ❤️ by <span className="font-pixel">Pixils</span>
      </div>
      <div>
        incubated at{" "}
        <a
          href="https://hackowasp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="inline"
            src="/hackowasp.png"
            alt="Hackowasp"
            width={50}
            height={100}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
