import { fetchHotelDetail } from "@/action/action";

export default async function ReviewHotelPage({ params, searchParams }) {
  const hotel = await fetchHotelDetail({ id: params.id });

  const { roomType, checkIn, checkOut, guests } = searchParams;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Review Hotel</h1>

      <div className="border p-4 rounded">
        <p>Hotel: {hotel.country}</p>
        <p>Room Type: {roomType}</p>
        <p>Check-in: {checkIn}</p>
        <p>Check-out: {checkOut}</p>
        <p>Guests: {guests}</p>
        <p className="text-blue-600 font-semibold">Price: {hotel.price} Bath</p>
      </div>
    </div>
  );
}
