import { fetchHotelDetail } from "@/action/action";
import Detail from "@/components/detail/Detail";


const Details = async ({ params }) => {
  const { id } = params;
  const hotel = await fetchHotelDetail({ id });

  return <Detail hotel={hotel} />;
};

export default Details;
