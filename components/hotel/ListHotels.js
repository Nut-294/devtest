import CardHotel from "./CardHotel";
const ListHotels = ({ hotels }) => {
  return (
    <div className="w-full grid grid-cols-1 px-4 sm:px-0 sm:grid-cols-3 gap-4">
    {hotels.map((hotel,index)=>{
      return <CardHotel key={index} city={hotel.city} description={hotel.description} image={hotel.imageUrl} price={hotel.price} country={hotel.country}/>
    })}
    </div>
  );
};
export default ListHotels;
