const StatusFilter = ({ currentFilter, onFilterChange }) => {
  const statuses = ['All', 'Open', 'In Progress', 'Closed'];

  return (
    <div className="mb-6 flex flex-wrap gap-2">
      {statuses.map((status) => (
        <button
          key={status}
          onClick={() => onFilterChange(status)}
          className={`rounded-md px-4 py-2 text-sm font-medium transition-colors ${
            currentFilter === status
              ? 'bg-slate-900 text-white'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {status}
        </button>
      ))}
    </div>
  );
};

export default StatusFilter;
