export const fetchhotelDetail = async ({ id }) => {
    const res = await fetch(`http://localhost:3000/api/hotel/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch hotel detail");
    }
    return res.json();
  };
  
  