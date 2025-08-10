import CardRecom from "./CardRecom";
const ListRecom = ({hotels}) => {
  return (
    <div className="w-10 sm:w-full grid grid-rows-1  grid-flow-col gap-4 sm:grid-cols-1 sm:auto-cols-auto sm:grid-flow-row sm:overflow-x-visible shadow-lg">
     {hotels.map((hotel)=>{
      return <CardRecom key={hotel.id} id={hotel.id} city={hotel.city} description={hotel.description} image={hotel.imageUrl} price={hotel.price} country={hotel.country}/>
    })}

    </div>
  );
};
export default ListRecom;
