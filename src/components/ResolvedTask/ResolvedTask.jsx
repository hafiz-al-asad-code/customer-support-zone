import React from "react";

const ResolvedTask = ({ resolvedTasks }) => {
  return (
    <div>
      <h3 className="text-2xl text-[#34485A] font-semibold mb-4">
        Resolved Task
      </h3>

      {resolvedTasks.length === 0 ? (
        <p className="text-[#627382]">No resolved tasks yet.</p>
      ) : (
        <div>
          {resolvedTasks.map((resolvedTask) => (
            <div
              key={resolvedTask.id}
              className="py-[20px] px-4 bg-[#E0E7FF] rounded-[4px] shadow-xl mb-4"
            >
              <p className="text-[18px] font-medium text-[#001931]">
                {resolvedTask.title}
              </p>
            </div>
          ))}
        </div>
      )}

      {/*  */}
    </div>
  );
};

export default ResolvedTask;
