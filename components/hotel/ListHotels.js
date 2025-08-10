import CardHotel from "./CardHotel";
const ListHotels = ({ hotels }) => {
  return (
    <div className="w-full grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-3 gap-4">
    {hotels.map((hotel)=>{
      return <CardHotel key={hotel.id} id={hotel.id} city={hotel.city} description={hotel.description} image={hotel.imageUrl} price={hotel.price} country={hotel.country}/>
    })}

    {/* <CardHotel/>
    <CardHotel/>
    <CardHotel/>
    <CardHotel/>
    <CardHotel/>
    <CardHotel/> */}
    </div>
  );
};
export default ListHotels;
