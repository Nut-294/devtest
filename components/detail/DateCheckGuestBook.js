"use client";

import { useState } from "react";
import Link from "next/link";

const DateCheckGuestBook = ({ hotel }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 adult, 0 children - 1 room");
  const [focusField, setFocusField] = useState(null);
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

  return (
    <>
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
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="placeholder-black bg-white border border-gray-300 px-4 py-2 sm:flex-grow"
      />

      {/* ปุ่ม Book Now ตัวอย่าง กดแล้วไปหน้า review-hotel พร้อม query params */}
      <Link
        href={`/review-hotel/${hotel.id}?roomType=Standard Room&checkIn=${encodeURIComponent(
          checkIn
        )}&checkOut=${encodeURIComponent(checkOut)}&guests=${encodeURIComponent(
          guests
        )}`}
        className="bg-blue-600 text-white rounded-sm px-4 py-2 ml-2"
      >
        Book Now
      </Link>
    </>
  );
};

export default DateCheckGuestBook;
