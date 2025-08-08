'use client'
import ListHotels from "@/components/hotel/ListHotels";
import { FaAngleLeft } from "react-icons/fa6";
import SearchHotel from "@/components/hotel/SearchHotel";
import ListRecom from "@/components/hotel/ListRecom";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const Hotels = () => {
  const searchParams = useSearchParams();
  const location = searchParams.get("location") || "";


  useEffect(() => {
    fetch(`http://localhost:3000/api/search?location=${encodeURIComponent(location)}`)
      .then(async (res) => {
        if (!res.ok) {
          const err = await res.json();
          throw new Error(err.errorMsg || "Failed to fetch");
        }
        return res.json();
      })
      .then((data) => console.log('data',data))
      .catch((err) => consolg.log(err.message))
   
  }, [location]);

  return (
    <section className="sm:pl-44 px-4 mt-8">
      <div className="flex flex-col md:flex-row">
        {/* ซ้าย */}
        <div className="flex-grow max-w-[1100px] w-full">
          <div className="max-w-[1100px] w-full">
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
                <SearchHotel />
              </div>
            </div>

            {/* Recommended บรรทัดใหม่บน xs */}
            <aside className="block md:hidden mt-4 p-4 bg-gray-100 rounded">
              Recommended
              <ListRecom />
            </aside>

            <div className="flex flex-wrap items-center mt-6 mb-4">
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

            <ListHotels />
          </div>
        </div>

        {/* Recommended ฝั่งขวาบน md+ */}
        <aside className="hidden md:block w-[286px] sm:ml-6 mt-12 p-4 bg-gray-100 rounded">
          Recommended
          <ListRecom />
        </aside>
      </div>
    </section>
  );
};

export default Hotels;

// "use client";
// import { useHotel } from "@/context/HotelContext";
// const Hotel = () => {
//   const {hotels} = useHotel();
//   console.log(hotels);
//   return (
//     <div>
//       {hotels.map((item, index) => {
//         return (
//           <div key={index}>
//             <div>{item.city}</div>
//             <div>{item.zipCode}</div>
//             <div>{item.staate}</div>
//             <div>{item.address}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default Hotel;
