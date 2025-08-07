"use client";

import SearchForm from "./SearchForm";
import LocationInput from "./LocationInput";
import OtheInput from "./OtherInput";
import SearchButtom from "./SearchButtom";
import { useState } from "react";

export default function FormContainer() {
  const [location, setLocation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = `/api/search?location=${encodeURIComponent(location)}`;
  
      const response = await fetch(url, {
        method: "GET", // ✅ GET ไม่มี body
      });
  
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const data = await response.json();
      console.log("✅ Response from backend:", data);
  
      setLocation(""); // ล้าง input
    } catch (error) {
      console.error("❌ Error submitting form:", error);
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
