"use client";

import { useState } from "react";
import Link from "next/link";
import { FaAngleLeft } from "react-icons/fa";
import SearchHotel from "@/components/hotel/SearchHotel";
import SearchButton from "@/components/form/SearchButtom";
import ReviewCard from "@/components/detail/ReviewCard";

const Detail = ({ hotel }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [focusField, setFocusField] = useState(null);
  const [error, setError] = useState("");
  const [guestsInput, setGuestsInput] = useState(
    `${adults} adult, ${children} children - ${rooms} room`
  );
  const today = new Date().toISOString().split("T")[0];

  const formatDate = (dateString) => {
    if (!dateString) return "";
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const handleDateChange = (type, value) => {
    if (type === "in") setCheckIn(value);
    else setCheckOut(value);
  };

  const handleGuestsChange = (value) => {
    setGuestsInput(value);
    const match = value.match(
      /(\d+)\s*adult.*?(\d+)\s*children.*?(\d+)\s*room/i
    );
    if (match) {
      setAdults(parseInt(match[1], 10));
      setChildren(parseInt(match[2], 10));
      setRooms(parseInt(match[3], 10));
    }
  };
  const validateBooking = () => {
    const todayDate = new Date(today);
    const inDate = new Date(checkIn);
    const outDate = new Date(checkOut);

    if (!checkIn) {
      setError("Please select a check-in date.");
      return false;
    }
    if (!checkOut) {
      setError("Please select a check-out date.");
      return false;
    }
    if (inDate < todayDate) {
      setError("Check-in date cannot be in the past.");
      return false;
    }
    if (outDate <= inDate) {
      setError("Check-out date must be after check-in date.");
      return false;
    }
    if (adults <= 0 && children <= 0) {
      setError("Please enter number of guests.");
      return false;
    }

    setError("");
    return true;
  };

  const handleBookNow = (roomType) => {
    if (!validateBooking()) return;
    window.location.href = `/review-hotel/${hotel.id}?roomType=${roomType}&checkIn=${checkIn}&checkOut=${checkOut}&adults=${adults}&children=${children}&rooms=${rooms}`;
  };

  return (
    <section className="mx-auto w-full">
      <div className="bg-blue-50 sm:pl-44 px-4 pt-8">
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 mb-4 rounded">
            {error}
          </div>
        )}

        <div className="pb-2">
          <div className="flex flex-col sm:flex-row items-center mb-1 ">
            <div className="flex items-center w-full sm:w-auto">
              <Link
                href="/hotel"
                className="w-10 h-10 sm:mr-4 rounded-full bg-gray-100 hover:bg-gray-200 flex justify-center items-center"
              >
                <FaAngleLeft />
              </Link>
              <p className="flex-1 text-center sm:hidden ml-2">Hotel details</p>
            </div>
            <div className="w-full mt-2 sm:mt-0">
              <SearchHotel />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mb-4 mt-6 gap-8 w-full">
            <input
              type="text"
              placeholder="Where are you going?"
              className="placeholder-black bg-white border border-gray-300 px-4 sm:pr-28 py-2"
              disabled
              value={hotel.country}
            />
            <input
              type={focusField === "in" ? "date" : "text"}
              placeholder="Check-in"
              value={focusField === "in" ? checkIn : formatDate(checkIn)}
              onFocus={() => setFocusField("in")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleDateChange("in", e.target.value)}
              min={today}
              className="text-xs px-4 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none sm:flex-grow"
            />
            <input
              type={focusField === "out" ? "date" : "text"}
              placeholder="Check-out"
              value={focusField === "out" ? checkOut : formatDate(checkOut)}
              onFocus={() => setFocusField("out")}
              onBlur={() => setFocusField(null)}
              onChange={(e) => handleDateChange("out", e.target.value)}
              min={checkIn || today}
              className="text-xs px-4 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none sm:flex-grow"
            />

            <input
              type="text"
              placeholder="2 adult, 0 children - 1 room"
              value={guestsInput} // <-- ใช้ guestsInput แทน
              onChange={(e) => handleGuestsChange(e.target.value)}
              className="placeholder-black bg-white border border-gray-300 px-4 py-2 sm:flex-grow"
            />
            <SearchButton />
          </div>
        </div>
      </div>

      {/* Hotel Detail */}
      <div className="flex flex-col justify-center mx-auto xl:flex-row sm:pl-44 px-4">
        <div className="sm:w-4/6 w-full">
          {/* Images */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-0">
            <img
              src={hotel.imageUrl}
              alt={hotel.country}
              className="object-cover w-full h-full row-span-2"
            />
            <div className="grid gap-4">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="object-cover w-full h-full"
              />
              <div className="grid grid-cols-2 gap-x-4 gap-y-0">
                <img
                  src={hotel.imageUrl}
                  alt={hotel.country}
                  className="object-cover w-full h-full"
                />
                <img
                  src={hotel.imageUrl}
                  alt={hotel.country}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Hotel Info */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div>
              <div className="text-2xl">{hotel.country}</div>
              <div>{hotel.description}</div>
            </div>
            <div className="py-2 pl-2 sm:px-4 sm:py-2 mr-6 sm:mr-0 border text-sm sm:text-base border-blue-500 bg-white text-blue-800 rounded-sm">
              Price Starting from {hotel.price} Bath
            </div>
          </div>

          {/* Room Types */}
          <div className="mt-4 sm:mt-8 flex gap-2 sm:gap-28 w-full">
            <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="w-full sm:w-32 h-24"
              />
              <div className="flex-grow">
                <p className="px-2 sm:py-2 text-sm ">Standard Room</p>
                <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
                  {hotel.price}
                </p>
              </div>
              <button
                onClick={() => handleBookNow("Standard")}
                className="bg-blue-600 text-white rounded-sm px-4 py-2 text-center sm:[writing-mode:vertical-lr]"
              >
                Book Now
              </button>
            </div>

            <div className="w-1/2 border border-black rounded-sm flex flex-col sm:flex-row">
              <img
                src={hotel.imageUrl}
                alt={hotel.country}
                className="w-full sm:w-32 h-24"
              />
              <div className="flex-grow">
                <p className="px-2 sm:py-2 text-sm ">Deluxe</p>
                <p className="px-2 sm:text-2xl sm:font-bold text-blue-600">
                  {hotel.price}
                </p>
              </div>
              <button
                onClick={() => handleBookNow("Deluxe")}
                className="bg-blue-600 text-white rounded-sm px-4 py-2 text-center sm:[writing-mode:vertical-lr]"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        <div className="sm:w-2/6 w-full flex justify-center">
          <div className="mt-8 sm:mt-0 px-4 sm:px-0">
            <ReviewCard className="shadow-2xl" />
            <p className="text-blue-700 font-semibold cursor-pointer hover:underline mt-4">
              ✨ This property is in highly demand today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
