import React from "react";
import CustomerTickets from "../CustomerTickets/CustomerTickets";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const MainSection = ({
  ticketsPromise,
  selectedTickets,
  setSelectedTickets,
  resolvedTasks,
  setResolvedTasks,
}) => {
  return (
    <div className="max-w-[1440px] mx-auto lg:grid grid-cols-12 gap-8 mb-[50px] md:mb-[80px]">
      <div className="col-span-9">
        <CustomerTickets
          ticketsPromise={ticketsPromise}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
          resolvedTasks={resolvedTasks}
        ></CustomerTickets>
      </div>

      <div className="col-span-3 space-y-[40px] mt-[50px] md:mt-[80px] lg:mt-0">
        <TaskStatus
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
          resolvedTasks={resolvedTasks}
          setResolvedTasks={setResolvedTasks}
        ></TaskStatus>
        <ResolvedTask resolvedTasks={resolvedTasks}></ResolvedTask>
      </div>
    </div>
  );
};

export default MainSection;
