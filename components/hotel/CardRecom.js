import React from "react";
import Image from "next/image";
import Link from "next/link";
function CardRecom({id,city,country,image}) {
  return (
    <article>
    <Link href={`explore-hotel/${id}`}>
      <div className="bg-white rounded-md">
        <Image
          src={image}
          alt={`${image}`}
          width={300}
          height={200}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p>{city}</p>
          <p className="text-xs">{country}</p>
        </div>
      </div>
    </Link>
    </article>
  );
}

export default CardRecom;
