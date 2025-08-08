'use client'
import { useHotel } from "@/context/HotelContext";
const Hotel = () => {
  const { hotels } = useHotel();
  console.log('hotels',hotels)
  return (
    <div>{hotels}</div>
  )
}
export default Hotel
