import FormContainer from "@/components/form/FormContainer";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col-reverse sm:flex-row gap-6 sm:gap-8 px-4 sm:px-6 pt-6 sm:pt-0 bg-white">
      {/* ซ้าย: ข้อมูล */}
      <div className="w-full sm:w-1/2 text-center sm:text-left mt-6 sm:mt-[43px]">
        <FormContainer />

        RecentSearch
      </div>

      {/* ขวา: รูปภาพ */}
      <div className="w-full sm:w-1/2 flex justify-center items-start">
        <div className="w-full max-w-md sm:max-w-full">
          <Image
            src="/Explore.png"
            alt="Explore"
            width={982}
            height={1080}
            className="rounded-xl object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
