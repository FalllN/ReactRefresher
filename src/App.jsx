import { useState } from 'react';
import ticketsData from './data/tickets';
import Header from './components/Header';
import TicketCard from './components/TicketCard';
import StatusFilter from './components/StatusFilter';

function App() {
  const [tickets] = useState(ticketsData);
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredTickets =
    filterStatus === 'All'
      ? tickets
      : tickets.filter((ticket) => ticket.status === filterStatus);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Header />

      <StatusFilter currentFilter={filterStatus} onFilterChange={setFilterStatus} />

      <div className="grid gap-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
        ) : (
          <p className="py-10 text-center text-slate-500">
            No tickets found with status "{filterStatus}".
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
