'use client'
import { useHotel } from "@/context/HotelContext"
const RecentSearch = () => {
    const {hotels} = useHotel()
  return (
    <div>{hotels}</div>
  )
}
export default RecentSearch