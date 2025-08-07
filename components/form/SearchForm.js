'use Client'
export default function SearchForm() {
  return (
    <div>
      <div className="w-full max-w-full mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 bg-gray-100 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
         disabled
        />
      </div>
      
    </div>
  );
}
