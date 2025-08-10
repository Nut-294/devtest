// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// function CardHotel({ city, description, image, price, country }) {
//   return (
//     <article>
//       <Link href={"/explore-hotel"}>
//       <div className="bg-gray-100 rounded-md">
//         <Image src="/Explore_full.png" alt="/Explore.png" width={400} height={200} />
//       </div>
//       <div className="sm:flex justify-between">
//         <div>
//           <p>AAAAAAAAAAAAAAAAAAAAAAAAAA</p>

//           <p className="text-xs">Price starts from AAAAAAAAAAAAAAAAA</p>
//         </div>
//         <button type="button" className="text-blue-800 px-8 py-2 shadow-md">
//           View Details
//         </button>
//       </div>
//       </Link>
//     </article>
//   );
// }

// export default CardHotel;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function CardHotel({ id, city, description, image, price, country }) {
  return (
    <article>
      <Link href={`explore-hotel/${id}`}>
        <div className="bg-gray-100 rounded-md">
          <Image src={image} alt={`${image}`} width={400} height={200} />
        </div>
        <div className="sm:flex justify-between">
          <div>
            <p>
              {country.length > 15 ? country.slice(0, 10) + "..." : country}
            </p>

            <p className="text-xs">
              Price starts from {price.toLocaleString()}
            </p>
          </div>
          <button type="button" className="text-blue-800 px-8 py-2 shadow-md">
            View Details
          </button>
        </div>
      </Link>
    </article>
  );
}

export default CardHotel;
