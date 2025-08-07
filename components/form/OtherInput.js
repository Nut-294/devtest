import { FiMapPin } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
export default function OtheInput() {
  return (
    <div className="mt-4 grid grid-cols-2">

      <div className="relative col-span-2 w-full max-w-full mx-auto mt-4 ">
        <span className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 ">
          <FiMapPin />
        </span>
        <input
          type="text"
          placeholder="Pattaya"
          className="placeholder-black text-xs w-full pl-10 px-4 py-2 md:pl-20 border border-blue-300  rounded-sm focus:ring-blue-800 focus:outline-none focus:ring-1 focus:bg-white cursor-default bg-gray-100"
          readOnly
        />
      </div>


      <div className="col-span-2 w-full max-w-full mx-auto mt-2">
        <div className="relative flex ">
          <span className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2">
            <CiCalendar />
          </span>
          <input
            type="text"
            placeholder="Thu,28 Jan-2021"
            className="placeholder-black text-xs w-1/2 pl-10 pr-2  px-4 py-2 md:pl-20 border border-blue-300  rounded-l-sm focus:ring-blue-800 focus:outline-none focus:ring-1 focus:bg-white cursor-default bg-gray-100"
            disabled
          />
          <input
            type="text"
            placeholder="Fri,29 Jan-2021"
            className="placeholder-black text-xs w-1/2 px-4 py-2 md:pl-12 border border-blue-300 -ml-px rounded-r-sm focus:ring-blue-800 focus:outline-none focus:ring-1 focus:bg-white cursor-default bg-gray-100"
            disabled
          />
        </div>
      </div>


      <div className="relative col-span-2 w-full max-w-full mx-auto mt-2">
        <span className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 ">
          <FiUsers />
        </span>
        <input
          type="text"
          placeholder="2 adult,1 children - 1 room"
          className="placeholder-black text-xs w-full pl-10 px-4 py-2 md:pl-20 border border-blue-300  rounded-sm focus:ring-blue-800 focus:outline-none focus:ring-1 focus:bg-white cursor-default bg-gray-100"
          disabled
        />
      </div>
    </div>
  );
}
