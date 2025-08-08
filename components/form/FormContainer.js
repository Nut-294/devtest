"use client";
import SearchForm from "./SearchForm";
import LocationInput from "./LocationInput";
import OtheInput from "./OtherInput";
import SearchButtom from "./SearchButtom";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormContainer() {
  const [location, setLocation] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!location) return;

    router.push(`/hotel?location=${encodeURIComponent(location)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-12 px-4 sm:px-0">
      <SearchForm location={location} setLocation={setLocation} />
      <h1 className="text-blue-800 font-semibold text-xl md:text-3xl mt-4 md:mt-8">
        What Are You Looking For?
      </h1>
      <LocationInput />
      <OtheInput />
      <div className="flex justify-center">
        <SearchButtom />
      </div>
    </form>
  );
}
