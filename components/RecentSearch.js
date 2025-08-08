'use client'
import { useHotel } from "@/context/HotelContext"
const RecentSearch = () => {
    const {country} = useHotel()
  return (
    <div>{country}</div>
  )
}
export default RecentSearch