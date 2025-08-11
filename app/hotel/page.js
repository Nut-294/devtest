"use client";
import ListHotels from "@/components/hotel/ListHotels";
import { FaAngleLeft } from "react-icons/fa6";
import SearchHotel from "@/components/hotel/SearchHotel";
import ListRecom from "@/components/hotel/ListRecom";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import Link from "next/link";
import { fetchHotels } from "@/action/action";

const Hotels = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    const loadHotels = async () => {
      const data = await fetchHotels(location);
      setHotels(data);
    };
    loadHotels();
  }, [location]);
  

  return (
    <section className="sm:pl-44 px-4 mt-8">
      <div className="flex flex-col md:flex-row">
        {/* ซ้าย */}
        <div className="flex-grow w-full">
          <div className="max-w-[1100px] ">
            <div className="w-full flex flex-col sm:flex-row">
              <div className="w-10 h-10 sm:mr-4  rounded-full flex-shrink-0 bg-gray-100 hover:bg-gray-200 flex justify-center items-center mb-2 sm:mb-0">
                <Link href="/explore">
                  <FaAngleLeft />
                </Link>
              </div>
              <h2 className="text-center sm:hidden mb-2 text-lg font-semibold">
                Hotel
              </h2>

              <div className="flex-1">
                <SearchHotel  />
              </div>
            </div>

            {/* Recommended บรรทัดใหม่บน xs */}
            <aside className="block md:hidden mt-4 p-4 bg-gray-100 rounded">
              Recommended
              <ListRecom  hotels={hotels}/>
            </aside>

            <div className="flex flex-wrap items-center mt-6 mb-4 px-4 sm:px-0">
              <h3 className="text-lg font-semibold">
                Best places to enjoy Stay
              </h3>

              {/* กลุ่มปุ่ม */}
              <div className="flex flex-row gap-2 ml-0 sm:ml-auto mt-2 sm:mt-0">
                <button
                  type="button"
                  className="border-2 border-blue-700 p-2 rounded-md shadow text-blue-800 font-semibold"
                >
                  Sort By
                </button>
                <button
                  type="button"
                  className="border-2 border-blue-700 p-2 rounded-md shadow text-blue-800 font-semibold"
                >
                  Filter
                </button>
              </div>
            </div>

            <ListHotels  hotels={hotels} className="w-full"/>
          </div>
        </div>

        {/* Recommended */}
        <aside className="hidden md:block w-[286px] sm:ml-6 mt-12 p-4 bg-gray-100 rounded">
          Recommended
          <ListRecom hotels={hotels}/>
        </aside>
      </div>
    </section>
  );
};

export default Hotels;

