import Navbar from "@/components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import MoonLoader from "react-spinners/MoonLoader";
import ImageGrid from "@/components/ImageGrid";

const CriminalsList = () => {
  const [output, setOutput] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/portraits/")
      .then((res) => {
        setOutput(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mx-20 max-w-4xl md:mx-auto">
      <Navbar />
      <div className="bg-white rounded-2xl p-10 mt-12">
        <h1 className="font-semibold text-3xl mb-6">
          {`${output.length} known criminals`}
        </h1>
        {isLoading ? (
          <div className="w-full flex justify-center">
            <MoonLoader color="#4f46e5"/>
          </div>
        ) : (
          <div className="flex justify-stretch gap-10 mb-10">
            <div>
              <ImageGrid output={output} />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CriminalsList;
