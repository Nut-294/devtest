"use client";
import SearchForm from "./SearchForm";
import LocationInput from "./LocationInput";
import OtheInput from "./OtherInput";
import SearchButtom from "./SearchButtom";

export default function FormContainer() {
  return (
    <div className=" mb-12">
      <SearchForm />
      <h1 className="text-blue-800 font-semibold text-xl md:text-3xl mt-4 md:mt-8">
        What Are You Looking For?
      </h1>
      <LocationInput />
      <OtheInput />
      <div className="flex justify-center">
        <SearchButtom />
      </div>
    </div>
  );
}
