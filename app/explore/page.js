import FormContainer from "@/components/form/FormContainer";
import Image from "next/image";
import { FaPlane } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 sm:pl-6 pt-6 sm:pt-0 bg-white">
      {/* ซ้าย: ข้อมูล */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-6 sm:mt-[43px] sm:pl-6">
        <FormContainer />
        RecentSearch
      </div>

      {/* ขวา: รูปภาพ */}
      <div className="w-full sm:w-1/2 flex items-start sm:h-screen">
        <div className="w-full h-auto sm:h-full relative">
          <picture>
            <source media="(max-width: 639px)" srcSet="/Explore_full.png" />
            <Image
              src="/Explore.png"
              alt="Explore"
              width={982}
              height={1080}
              className="rounded-xl w-full h-auto sm:h-full object-contain sm:object-cover"
              priority
            />
          </picture>

          {/* Gradient Overlay + Text */}
          <div className="absolute inset-0 pb-8 sm:pb-20 px-4 sm:px-8 bg-gradient-to-b from-transparent via-blue-300/20 to-blue-800 rounded-xl flex flex-col justify-end items-start">
            <FaPlane className="hidden sm:block sm:absolute sm:top-[12%] sm:left-[45%] sm:-rotate-15 text-white text-4xl pointer-events-none" />
            <h2 className="text-white text-3xl sm:text-5xl mb-2">
              Incredible India
            </h2>
            <p className="text-white text-base sm:text-lg mb-4">
              "For where thy treasure is <br /> here also will thy heart be"
            </p>
            <button className="text-white bg-white/40 hover:bg-white/20 px-4 py-2 rounded w-full sm:w-32">
              Take Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
