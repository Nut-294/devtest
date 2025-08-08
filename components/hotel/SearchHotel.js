"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const SearchHotel = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  // ดึง location ปัจจุบันมาเป็นค่าเริ่มต้น
  const [search, setSearch] = useState(searchParams.get("location") || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    // clone params เดิม
    const params = new URLSearchParams(searchParams.toString());

    // แทนค่าของ location เดิม
    params.set("location", search);

    router.push(`/hotel?${params.toString()}`);
  };

  return (
    <form className="flex-grow w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search hotels"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-gray-300 bg-gray-100 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-100"
      />
    </form>
  );
};

export default SearchHotel;
