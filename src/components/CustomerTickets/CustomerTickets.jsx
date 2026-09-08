import React, { use } from "react";
import CustomerTicketsCard from "../CustomerTicketsCard/CustomerTicketsCard";

const CustomerTickets = ({
  ticketsPromise,
  selectedTickets,
  setSelectedTickets,
  resolvedTasks,
}) => {
  const ticketsData = use(ticketsPromise);

  const filteredCustomerTickets = ticketsData.filter(
    (customerTicket) =>
      !resolvedTasks.some(
        (resolvedTask) => customerTicket.id === resolvedTask.id,
      ),
  );

  return (
    <div>
      <h3 className="text-2xl text-[#34485A] font-semibold mb-4">
        Customer Tickets
      </h3>

      <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
        {filteredCustomerTickets.map((ticket) => (
          <CustomerTicketsCard
            key={ticket.id}
            ticket={ticket}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          ></CustomerTicketsCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
