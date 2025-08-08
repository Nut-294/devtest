import Image from 'next/image'
import React from 'react'

function CardHotel() {
  return (
    <div>
      <div className="bg-green-100 rounded-md">
        <Image
          src="/Explore_full"
          alt="Explore_full"
          width={400}
          height={200}
        />
      </div>
      <div className="flex justify-between">
        <div>
          <p >AAAA</p>
          <p className="text-xs">AAAA</p>
        </div>
        <button type="button" className="text-blue-800 px-8 py-2 shadow-md">View Details</button>
      </div>
    </div>
  )
}

export default CardHotel
