'use client'
export default function SearchForm({location,setLocation}) {
  return (
    <div>
      <div className="w-full max-w-full mx-auto ">
        <input
          type="text"
          value={location}
          placeholder="Search city , Country, Place for Travel advisory"
          className="w-full border border-gray-300 bg-gray-100 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
          onChange={(e)=>setLocation(e.target.value)}
        />
      </div>
      
    </div>
  );
}
