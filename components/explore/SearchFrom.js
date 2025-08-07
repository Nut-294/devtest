
export default function SearchForm() {
  return (
    <form className="w-full max-w-full mx-auto">
      <input
        type="text"
        placeholder="Search..."
        className="w-full border border-gray-300 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
  );
}
