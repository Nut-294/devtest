import { FaStar, FaStarHalfAlt, FaCar, FaBath, FaWineBottle, FaWifi, FaDumbbell } from "react-icons/fa";

export default function ReviewCard() {
  return (
    <div className="max-w-sm bg-white rounded-xl shadow-xl pl-16 sm:p-6 space-y-6">
      {/* Score and Title */}
      <div className="flex items-center space-x-4">
        <div className="bg-blue-700 text-white font-bold text-xl rounded-tr-md rounded-br-md px-4 py-2">
          8.4
        </div>
        <div>
          <h2 className="font-semibold text-lg">Excellent</h2>
          <p className="text-sm text-blue-300 cursor-pointer hover:underline">6879 Reviews</p>
        </div>
      </div>

      {/* Ratings */}
      <div className="space-y-3">
        {[
          { label: "Housekeeping", fullStars: 4, halfStar: true },
          { label: "Food", fullStars: 4, halfStar: true },
          { label: "Service", fullStars: 4, halfStar: true },
          { label: "Staff", fullStars: 4, halfStar: true },
        ].map(({ label, fullStars, halfStar }, idx) => (
          <div key={idx} className="flex items-center space-x-2">
            <span className="w-28 text-gray-700">{label}</span>
            <div className="flex text-yellow-500">
              {Array(fullStars)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
              {halfStar && <FaStarHalfAlt />}
            </div>
          </div>
        ))}
      </div>

      {/* Services */}
      <div>
        <p className="text-gray-700 mb-2">Services</p>
        <div className="flex space-x-4 text-blue-700">
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FaCar size={20} />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FaBath size={20} />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FaWineBottle size={20} />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FaWifi size={20} />
          </div>
          <div className="p-3 border border-gray-200 rounded-lg hover:bg-blue-50 cursor-pointer">
            <FaDumbbell size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
