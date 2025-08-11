import SearchButton from "@/components/form/SearchButtom";
import SearchHotel from "@/components/hotel/SearchHotel";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";

const page = () => {
  return (
    <section className="mx-auto w-full">
      <div className="bg-blue-50 sm:pl-44 px-4 pt-8">
        <div className="pb-2">
          <div className="flex flex-col sm:flex-row items-center mb-1 ">
            <div className="flex items-center w-full sm:w-auto">
              <Link
                href="/explore-hotel"
                className="w-10 h-10 sm:mr-4 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center"
              >
                <FaAngleLeft />
              </Link>
              <p className="flex-1 text-center sm:hidden ml-2">Review hotel</p>
            </div>
            <div className="w-full mt-2 sm:mt-0">
              <SearchHotel />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mb-4 mt-6 gap-8 w-full">
            <input
              type="text"
              placeholder="Where are you going?"
              className="placeholder-black bg-white border border-gray-300 px-4 sm:pr-28 py-2"
              disabled
            />
            <input
              placeholder="Check-in"
              className="text-xs px-4 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none sm:flex-grow"
            />
            <input
              placeholder="Check-out"
              className="text-xs px-4 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none sm:flex-grow"
            />

            <input
              type="text"
              placeholder="2 adult, 0 children - 1 room"
              className="placeholder-black bg-white border border-gray-300 px-4 py-2 sm:flex-grow"
            />
            <SearchButton />
          </div>
        </div>
      </div>

      <div className="sm:pl-44 px-4 mt-8">
        <div
          className="grid grid-cols-1 sm:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-8"
        >
          {/* ซ้าย: Review + Check-in/out + Guest Details */}
          <div className="flex flex-col space-y-6">
            {/* Review your booking */}
            <div>
              <h3 className="text-lg font-semibold mb-1">
                Review your booking
              </h3>

              <div className="flex flex-col sm:flex-row justify-between">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <a
                      href="#"
                      className="text-blue-700 font-bold hover:underline"
                    >
                      Holiday In Resort
                    </a>
                    <div className="flex items-center space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.972c.3.92-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.838-.197-1.54-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.04 9.4c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.973z" />
                        </svg>
                      ))}
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.973a1 1 0 00.95.69h4.176c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.972c.3.92-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.785.57-1.838-.197-1.54-1.118l1.287-3.972a1 1 0 00-.364-1.118L2.04 9.4c-.783-.57-.38-1.81.588-1.81h4.176a1 1 0 00.95-.69l1.286-3.973z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Tambudki, Arpora, goa, Goa, India
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    This hotel is reviewed by global firm
                  </p>
                </div>
                <img
                  src="/Explore_full.png"
                  alt="hotel"
                  className="rounded-md object-cover w-full mt-1 sm:mt-0 sm:w-40 h-20"
                />
              </div>
            </div>

            {/* Check-in / Check-out */}
            <div className="sm:flex sm:items-center sm:justify-between bg-[#eef0fa] rounded-md p-4 ">
              <div className="flex justify-between  items-center sm:px-4">
                <div className="mr-4 sm:mr-20 ">
                  <p className="text-xs sm:text-sm text-gray-600">Check-in</p>
                  <p className="font-semibold text-black text-base">
                    Sunday 21, Dec <br />
                    <span className="text-xs font-normal">10am</span>
                  </p>
                </div>
                <button className="bg-violet-300 text-blue-800 my-4 py-2 px-8 sm:px-8 sm:py-2 rounded-md whitespace-nowrap">
                  1 night
                </button>
              </div>

              <div className="flex justify-between items-center mt-2 sm:mt-0 sm:px-4">
                <div className="mr-2 sm:mr-20">
                  <p className="text-xs sm:text-sm text-gray-600">Check-out</p>
                  <p className="font-semibold text-black text-base">
                    Monday 22,Dec <br />
                    <span className="text-xs font-normal">10am</span>
                  </p>
                </div>

                <div className="font-semibold whitespace-nowrap text-base">
                  2 Adult - 1 room
                </div>
              </div>
            </div>

            {/* Guest Details */}
            <div className="sm:w-7/8 pr-4">
              <h4 className="font-semibold mb-2">Guest Details</h4>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
            </div>
          </div>

          {/* ขวา: สรุปราคา + Cancellation Charges */}
          <div className="space-y-6 sm:px-24">
            <div className="flex items-center space-x-4">
              <div className="flex flex-col w-full">
                <p className="mb-1 text-gray-400">1 room X 1 night</p>
                <p className="mb-1 text-gray-400">Total discount</p>
                <p className="mb-1 text-gray-400">Price after discount</p>
                <p className="mb-1 text-gray-400">Taxes & service fees</p>
                <p className="mt-2 font-bold text-black text-lg">
                  Total Amount
                </p>
              </div>
              <div className="flex flex-col text-right text-blue-300 font-semibold w-28">
                <p>1,000.00</p>
                <p>0.00</p>
                <p>1,000.00</p>
                <p>140.00</p>
                <p className="mt-2 text-xl font-bold text-blue-600">1,140.00</p>
              </div>
            </div>

            <div className="rounded-lg p-4 bg-white shadow-sm text-gray-600">
              <h5 className="font-bold mb-1">Cancellation Charges</h5>
              <p className="mb-2 font-semibold text-gray-900">Non Refundable</p>
              <p className="text-xs mb-2 leading-relaxed">
                Penalty may be charged by the airline & by MMT based on how
                close to departure date you cancel. View fare rules to know
                more.
              </p>
              <a href="#" className="text-xs font-semibold hover:underline">
                VIEW POLICY
              </a>
            </div>
          </div>

          {/* Add Guest  */}
          <div className="sm:col-span-2  sm:w-3/6">
            <button className="mt-2 text-sm font-semibold text-gray-700 hover:underline">
              Add Guest +
            </button>
            <div className="mt-4">
              <label
                htmlFor="specialRequest"
                className="block text-sm font-semibold mb-1"
              >
                Special Request(optional)
              </label>
              <textarea
                id="specialRequest"
                rows="4"
                className="w-full border border-gray-300 rounded-md px-3 py-2 resize-none"
              ></textarea>
            </div>

            <Link href={"/payments"} className="mt-6 bg-[#4451ff] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#3746d6] transition">
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default page;

// import { fetchHotelDetail } from "@/action/action";

// export default async function ReviewHotelPage({ params, searchParams }) {
//   const hotel = await fetchHotelDetail({ id: params.id });

//   const { roomType, checkIn, checkOut, guests } = searchParams;

//   return (
//     <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Review Hotel</h1>

//       <div className="border p-4 rounded">
//         <p>Hotel: {hotel.country}</p>
//         <p>Room Type: {roomType}</p>
//         <p>Check-in: {checkIn}</p>
//         <p>Check-out: {checkOut}</p>
//         <p>Guests: {guests}</p>
//         <p className="text-blue-600 font-semibold">Price: {hotel.price} Bath</p>
//       </div>
//     </div>
//   );
// }
