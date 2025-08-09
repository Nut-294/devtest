"use client";
import { useState } from "react";

const DateCheck = ({ onChange }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
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

  const handleChange = (type, value) => {
    if (type === "in") setCheckIn(value);
    else setCheckOut(value);

    if (onChange) {
      onChange(
        type === "in" ? value : checkIn,
        type === "out" ? value : checkOut
      );
    }
  };

  return (
    <div className="flex">
      <input
        type={focusField === "in" ? "date" : "text"}
        placeholder="Check-in"
        value={focusField === "in" ? checkIn : formatDate(checkIn)}
        onFocus={() => setFocusField("in")}
        onBlur={() => setFocusField(null)}
        onChange={(e) => handleChange("in", e.target.value)}
        min={today}
        className="text-xs w-full px-4 sm:px-16 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none"
      />

      <input
        type={focusField === "out" ? "date" : "text"}
        placeholder="Check-out"
        value={focusField === "out" ? checkOut : formatDate(checkOut)}
        onFocus={() => setFocusField("out")}
        onBlur={() => setFocusField(null)}
        onChange={(e) => handleChange("out", e.target.value)}
        min={checkIn || today}
        className="text-xs w-full px-4 sm:px-16 py-2 rounded-sm placeholder-black bg-white border border-gray-300 focus:outline-none"
      />
    </div>
  );
};

export default DateCheck;
