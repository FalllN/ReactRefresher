const TicketSummary = ({ tickets }) => {
  const total = tickets.length;
  const open = tickets.filter((t) => t.status === 'Open').length;
  const inProgress = tickets.filter((t) => t.status === 'In Progress').length;
  const closed = tickets.filter((t) => t.status === 'Closed').length;

  const stats = [
    { label: 'Total', value: total, color: 'text-slate-900' },
    { label: 'Open', value: open, color: 'text-red-600' },
    { label: 'In Progress', value: inProgress, color: 'text-yellow-600' },
    { label: 'Closed', value: closed, color: 'text-green-600' },
  ];

  return (
    <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-lg border border-slate-200 bg-white p-4 text-center shadow-sm"
        >
          <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
          <div className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TicketSummary;
