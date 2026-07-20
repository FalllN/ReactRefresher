import { useState } from 'react';
import ticketsData from './data/tickets';
import Header from './components/Header';
import TicketCard from './components/TicketCard';
import StatusFilter from './components/StatusFilter';
import SearchBar from './components/SearchBar';

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [filterStatus, setFilterStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

  const handleAdvanceStatus = (ticketId) => { //define
    setTickets((prevTickets) => //update state passing a function
      prevTickets.map((ticket) => { //map over tickets
        if (ticket.id === ticketId) { //ensure right ticket
          const statusOrder = ['Open', 'In Progress', 'Closed']; //define order
          const currentIndex = statusOrder.indexOf(ticket.status); //get current index
          const nextStatus = //determines next status
            currentIndex < statusOrder.length - 1 //is last status?
              ? statusOrder[currentIndex + 1]
              : ticket.status; //if last status, leave as is
          return { ...ticket, status: nextStatus };
        }
        return ticket;
      })
    );
  };

  const filteredTickets = tickets.filter((ticket) => { //results get filtered regardless essentially cant do an if else
      const checkStatus =
          filterStatus === 'All' || ticket.status === filterStatus;

      const checkSearch = ticket.customer.includes(searchTerm) || ticket.subject.includes(searchTerm);
      return checkStatus && checkSearch;
  });

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Header />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
      <StatusFilter currentFilter={filterStatus} onFilterChange={setFilterStatus} />

      <div className="grid gap-4">
        {filteredTickets.length > 0 ? (
          filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onAdvanceStatus={handleAdvanceStatus}
            />
          ))
        ) : (
          <p className="py-10 text-center text-slate-500">
            No tickets found with status "{filterStatus}" and search term "{searchTerm}".
          </p>
        )}
      </div>
    </main>
  );
}

export default App;
