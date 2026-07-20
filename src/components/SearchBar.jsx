const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search tickets"
        value={value} //Pulled passed data and assigned
        onChange={(event) => onChange(event.target.value)} //Passing data to parent because parent owns state *YOU MUST USE TARGET*
        className="w-full rounded-md border border-slate-300 px-4 py-2 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
      />
    </div>
  );
};

export default SearchBar;
