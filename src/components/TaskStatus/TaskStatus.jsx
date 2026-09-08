import React from "react";

const TaskStatus = ({
  selectedTickets,
  setSelectedTickets,
  resolvedTasks,
  setResolvedTasks,
}) => {
  const handleCompletedTask = (t) => {
    const filteredTaskTickets = selectedTickets.filter(
      (selectedTicket) => selectedTicket.id !== t.id,
    );

    setSelectedTickets(filteredTaskTickets);

    setResolvedTasks([...resolvedTasks, t]);
  };

  return (
    <div>
      <h3 className="text-2xl text-[#34485A] font-semibold mb-4">
        Task Status
      </h3>

      {selectedTickets.length === 0 ? (
        <p className="text-[#627382]">Select a ticket to add to Task Status</p>
      ) : (
        <div className="space-y-4">
          {selectedTickets.map((singleTicket) => (
            <div
              key={singleTicket.id}
              className="p-4 rounded-[4px] bg-white shadow-xl"
            >
              <p className="text-[18px] font-medium text-[#001931] mb-4">
                {singleTicket.title}
              </p>
              <button
                onClick={() => handleCompletedTask(singleTicket)}
                className="font-semibold text-white bg-[#02A53B] py-3 rounded-[4px] w-full"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskStatus;
