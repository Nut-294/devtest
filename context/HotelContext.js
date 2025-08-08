'use client'
import { createContext, useContext, useState } from "react";

const HotelContext = createContext();

export function HotelProvider({ children }) {
  const [hotels, setHotels] = useState([]);
  return (
    <HotelContext.Provider value={{ hotels, setHotels }}>
      {children}
    </HotelContext.Provider>
  );
}

export function useHotel() {
  return useContext(HotelContext);
}
