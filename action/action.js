export const fetchHotels = async (location) => {
  try {
    const url = location
      ? `http://localhost:3000/api/search?location=${location}`
      : `http://localhost:3000/api/search`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch hotels");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("err.message", err.message);
    return [];
  }
};




export const fetchHotelDetail = async ({ id }) => {
    const res = await fetch(`http://localhost:3000/api/hotel/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch hotel detail");
    }
    return res.json();
  };
  
  