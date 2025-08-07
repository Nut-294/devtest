import FormContainer from "@/components/form/FormContainer";
import Image from "next/image";

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
        <div className="w-full h-auto sm:h-full">
          <Image
            src="/Explore.png"
            alt="Explore"
            width={982}
            height={1080}
            className="rounded-xl w-full h-auto sm:h-full object-contain sm:object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
