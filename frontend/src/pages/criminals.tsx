import Navbar from "@/components/Navbar";
import AllImages from "@/components/Allimages";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

const CriminalsList = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/portraits/")
      .then((res) => {
        setOutput(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-20 max-w-4xl md:mx-auto">
      <Navbar />
      <div className="bg-white rounded-2xl p-10 mt-12">
        <h1 className="text-zinc-500 font-semibold text-3xl mb-4">
          All criminals
        </h1>
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          <div className="flex justify-stretch gap-10 mb-10">
            <div>
              <AllImages output={output} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CriminalsList;
