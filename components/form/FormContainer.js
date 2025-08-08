"use client";
import SearchForm from "./SearchForm";
import LocationInput from "./LocationInput";
import OtheInput from "./OtherInput";
import SearchButtom from "./SearchButtom";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useHotel } from "@/context/HotelContext";

export default function FormContainer() {
  const [location, setLocation] = useState("");
  const router = useRouter();
  const { setHotels } = useHotel();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`/api/search?location=${location}`);
      if (!res.ok) throw new Error("Network response was not ok");
      const dataHotel = await res.json();

      setHotels(dataHotel); 
      router.push("/hotel");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 px-4 sm:px-0">
      <SearchForm />
      <h1 className="text-blue-800 font-semibold text-xl md:text-3xl mt-4 md:mt-8">
        What Are You Looking For?
      </h1>
      <LocationInput />
      <OtheInput location={location} setLocation={setLocation} />
      <div className="flex justify-center">
        <SearchButtom />
      </div>
    </form>
  );
}
