import { useState } from 'react';

const TicketForm = ({ onAddTicket }) => {
  const [customer, setCustomer] = useState('');
  const [subject, setSubject] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!customer.trim()) {
      newErrors.customer = 'Customer name is required';
    }
    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onAddTicket({
      customer,
      subject,
      priority,
    });

    // Reset form
    setCustomer('');
    setSubject('');
    setPriority('Medium');
    setErrors({});
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-4 text-xl font-bold text-slate-900">Create New Ticket</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Customer Name</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className={`rounded-md border p-2 text-slate-900 focus:outline-none focus:ring-1 ${
              errors.customer
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
            }`}
            placeholder="e.g. John Doe"
          />
          {errors.customer && (
            <span className="text-xs text-red-500">{errors.customer}</span>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-slate-700">Priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="rounded-md border border-slate-300 p-2 text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label className="text-sm font-medium text-slate-700">Subject</label>
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className={`rounded-md border p-2 text-slate-900 focus:outline-none focus:ring-1 ${
              errors.subject
                ? 'border-red-500 focus:ring-red-500'
                : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
            }`}
            placeholder="Brief description of the issue"
          />
          {errors.subject && (
            <span className="text-xs text-red-500">{errors.subject}</span>
          )}
        </div>

      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-slate-900 py-2 font-semibold text-white transition-colors hover:bg-slate-800"
      >
        Add Ticket
      </button>

    </form>
  );
};

export default TicketForm;
