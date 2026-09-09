import React, { useState } from "react";
import statusGreenImg from "../../assets/Ellipse-22.png";
import statusYellowImg from "../../assets/Ellipse-23.png";
import calenderImg from "../../assets/ri_calendar-line.png";

const CustomerTicketsCard = ({
  ticket,
  selectedTickets,
  setSelectedTickets,
}) => {
  const [toggle, setToggle] = useState("Open");

  const handleAddTickets = (singleTicket) => {
    if (toggle === "Open") {
      setSelectedTickets([...selectedTickets, singleTicket]);

      alert("The following ticket has been added to the Task Status");
    }
  };

  return (
    <div
      onClick={() => {
        handleAddTickets(ticket);
        setToggle("In-Progress");
      }}
      className="p-4 rounded-[4px] bg-white shadow-xl cursor-pointer"
    >
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-[#001931] text-[18px]">
          {ticket.title}
        </h4>

        <div
          className={`flex items-center gap-[6px] py-[4px] px-[12px] ${toggle === "Open" ? "bg-[#B9F8CF] text-[#0B5E06]" : "bg-[#F8F3B9] text-[#9C7700]"}  rounded-full`}
        >
          <img
            src={`${toggle === "Open" ? statusGreenImg : statusYellowImg}`}
            className="w-[16px] h-[16px]"
            alt=""
          />
          <span className="font-medium">
            {toggle === "Open" ? ticket.status : toggle}
          </span>
        </div>
      </div>

      <p className="text-[#627382] mt-2 mb-4">{ticket.description}</p>

      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex items-center gap-[16px]">
          <p className="text-[14px] font-medium text-[#627382]">#{ticket.id}</p>
          <p
            className={`text-[14px] font-medium  ${ticket.priority === "HIGH" ? "text-[#F83044]" : ticket.priority === "MEDIUM" ? "text-[#FEBB0C]" : "text-[#02A53B]"}`}
          >
            {ticket.priority} PRIORITY
          </p>
        </div>

        {/* right */}
        <div className="flex items-center gap-[16px]">
          <p className="text-[14px] text-[#627382]">{ticket.customer}</p>
          <div className="flex items-center gap-2">
            <img src={calenderImg} alt="" />
            <p className="text-[14px] text-[#627382]">{ticket.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicketsCard;
