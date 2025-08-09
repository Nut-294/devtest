import Image from "next/image";
import React from "react";

function CardHotel({ city, description ,image}) {
  return (
    <div>
      <div className="bg-green-100 rounded-md">
        <Image
          src={image}
          alt={`${image}`}
          width={400}
          height={200}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p>{city}</p>
          <p className="text-xs">{description}</p>
        </div>
        <button type="button" className="text-blue-800  px-8 py-2 shadow-md">
          View Details
        </button>
      </div>
    </div>
  );
}

export default CardHotel;
