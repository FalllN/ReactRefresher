const TicketCard = ({ ticket }) => {
  const { id, customer, subject, status, priority } = ticket;

  const statusColors = {
    Open: 'bg-blue-100 text-blue-800',
    'In Progress': 'bg-yellow-100 text-yellow-800',
    Closed: 'bg-green-100 text-green-800',
  };

  const priorityColors = {
    High: 'text-red-600',
    Medium: 'text-orange-600',
    Low: 'text-gray-600',
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-3 flex items-start justify-between">
        <span className="text-sm font-medium text-slate-500">{id}</span>
        <span
          className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
            statusColors[status] || 'bg-slate-100 text-slate-800'
          }`}
        >
          {status}
        </span>
      </div>
      <h3 className="mb-1 text-lg font-semibold text-slate-900">{subject}</h3>
      <p className="mb-4 text-slate-600">{customer}</p>
      <div className="flex items-center text-sm">
        <span className="mr-2 font-medium text-slate-500">Priority:</span>
        <span className={`font-semibold ${priorityColors[priority] || 'text-slate-700'}`}>
          {priority}
        </span>
      </div>
    </div>
  );
};

export default TicketCard;
