import React from "react";
import Image from "next/image";
function CardRecom({width,height}) {
  return (
    <div>
      <div className="bg-red-100 rounded-md">
        <Image
          src="/Explore_full"
          alt="Explore_full"
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p>AAAA</p>
          <p className="text-xs">AAAA</p>
        </div>
      </div>
    </div>
  );
}

export default CardRecom;
