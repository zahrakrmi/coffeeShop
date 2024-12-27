import Image from "next/image";
import { useState, useEffect } from "react";

export default function LoadingComponent({ params, data }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    }, 100);

    return () => clearInterval(interval); // Clean up the interval when component unmounts
  }, []);

  if (!params || !data) {
    return (
      <main className="w-full flex flex-col justify-center items-center h-[100vh] bg-[#f4f4f4]">
        {/* Animated logo for coffee shop */}
        <figure className="text-center">
          <Image
            width={150}
            height={150}
            src="/black.png" 
            alt="loading..."
            className="animate-bounce"
          />
          <figcaption className="mt-6 w-3/4 sm:w-1/2 md:w-1/3 text-center">
            {/* Progress Bar */}
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600">
                    Loading...
                  </span>
                </div>
                <div>
                  <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded-full text-emerald-600">
                    {progress}%
                  </span>
                </div>
              </div>
              <div className="flex mb-2 items-center justify-between">
                <div className="w-full bg-gray-300 rounded-full h-2.5">
                  <div
                    className="bg-amber-500 h-2.5 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </figcaption>
        </figure>
      </main>
    );
  }

  return null; // Return null once data is ready
}
