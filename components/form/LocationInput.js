import { FaHotel, FaPlane, FaCar } from "react-icons/fa";
import { useState } from "react";

export default function SearchTabs() {
  const [selected, setSelected] = useState("hotel");

  const tabs = [
    { id: "hotel", icon: <FaHotel />, label: "Hotel" },
    { id: "flight", icon: <FaPlane />, label: "Flight" },
    { id: "car", icon: <FaCar />, label: "Car" },
  ];

  return (
    <div className="flex justify-center text-sm mt-8 md:space-x-20 space-x-10">
      {tabs.map((tab) => (
        <div key={tab.id} className="text-center">
          <button
          type="button"
            onClick={() => setSelected(tab.id)}
            className={`flex flex-col items-center p-3 rounded ${
              selected === tab.id
                ? "text-white bg-indigo-800 rounded-full"
                : "text-gray-500"
            }`}
            readOnly
          >
            <div className="text-xl sm:text-3xl ">{tab.icon}</div>
          </button>
          <span>{tab.label}</span>
        </div>
      ))}
    </div>
  );
}
