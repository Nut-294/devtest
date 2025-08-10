import DateCheck from "@/components/detail/DateCheck";
import SearchHotel from "@/components/hotel/SearchHotel";
import SearchButton from "@/components/form/SearchButtom";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import ReviewCard from "@/components/detail/ReviewCard";
import { fetchHotelDetail } from "@/action/action";

const Details = async ({ params }) => {
  const { id } = await params;
  const hotel = await fetchHotelDetail({ id });
  console.log("hotel", hotel);
  return (
    <section className="mx-auto w-full">
      <div className="bg-blue-50  sm:pl-44 px-4 pt-8">
        <div className="pb-2">
          <div className="flex flex-col sm:flex-row items-center mb-1 ">
            <div className="flex items-center w-full sm:w-auto">
              <Link
                href="/hotel"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center"
              >
                <FaAngleLeft />
              </Link>
              <p className="flex-1 text-center sm:hidden ml-2">Hotel details</p>
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
            <DateCheck className="flex-grow" />
            <input
              type="text"
              placeholder="2 adult, 0 children - 1 room"
              className="placeholder-black bg-white border border-gray-300 px-4 py-2 flex-grow"
              disabled
            />
            <SearchButton />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center mx-auto xl:flex-row sm:pl-44 px-4">
        {/* ฝั่งซ้าย */}
        <div className="sm:w-4/6 w-full">
          <div className="grid grid-cols-2 gap-x-4 gap-y-0">
            {/* รูปใหญ่ฝั่งซ้าย */}
            <img
              src={hotel.imageUrl}
              alt={hotel.country}
              className="object-cover w-full h-full row-span-2"
            />

            {/* ฝั่งขวา */}
            <div className="grid gap-4">
              {/* รูปบน */}
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="object-cover w-full h-full"
              />

              {/* แถวล่างเป็น 2 รูปติดกัน */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.country}
                  className="object-cover w-full h-full"
                />
                <img
                  src={hotel.imageUrl}
                  alt={hotel.country}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <div className="text-2xl">{hotel.country}</div>
              <div>{hotel.description}</div>
            </div>
            <div className="py-2 pl-2 sm:px-4 sm:py-2 mr-6 sm:mr-0 border text-sm sm:text-base border-blue-500 bg-white text-blue-800 rounded-sm">
              Price Starting from {hotel.price} Bath
            </div>
          </div>

          <div className="mt-4 sm:mt-8 flex gap-2 sm:gap-28 w-full">
            {/* <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="w-full sm:w-32 h-24"
              />
              <div className="flex-grow">
                <p className="px-2 sm:py-2 text-sm ">Deluxe Room</p>
                <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
                  {hotel.price}
                </p>
              </div>
              <Link
                href={`/review-hotel/${hotel.id}?roomType=Deluxe Room&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
                className="bg-blue-600 text-white rounded-sm px-4 py-2"
              >
                Book Now
              </Link>
            </div> */}

            <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="w-full sm:w-32 h-24"
              />
              <div className="flex-grow">
                <p className="px-2 sm:py-2 text-sm ">Standard Room</p>
                <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
                  {hotel.price}
                </p>
              </div>
              <button
                className="bg-blue-600 text-white rounded-sm text-center px-2 py-1 sm:py-2 sm:[writing-mode:vertical-lr]"
              >
                Book Now
              </button>
            </div>
            <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="w-full sm:w-32 h-24"
              />
              <div className="flex-grow">
                <p className="px-2 sm:py-2 text-sm ">Standard Room</p>
                <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
                  {hotel.price}
                </p>
              </div>
              <button
                className="bg-blue-600 text-white rounded-sm text-center px-2 py-1 sm:py-2 sm:[writing-mode:vertical-lr]"
              >
                Book Now
              </button>
            </div>


          </div>
        </div>

        {/* ฝั่งขวา */}
        <div className="sm:w-2/6 w-full flex justify-center">
          <div className="mt-8 sm:mt-0 px-4 sm:px-0">
            <ReviewCard className="shadow-2xl" />
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline mt-4">
              ✨ This property is in highly demand today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;





{/* <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
<img
  src={hotel.imageUrl}
  alt={hotel.country}
  className="w-full sm:w-32 h-24"
/>
<div className="flex-grow">
  <p className="px-2 sm:py-2 text-sm ">Standard Room</p>
  <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
    {hotel.price}
  </p>
</div>
<Link
  href={`/review-hotel/${hotel.id}?roomType=Deluxe Room&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`}
  className="bg-blue-600 text-white rounded-sm px-4 py-2"
>
  Book Now
</Link>
</div> */}
