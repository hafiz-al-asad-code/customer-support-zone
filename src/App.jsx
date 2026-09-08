import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";

const fetchTickets = async () => {
  const res = await fetch("data.json");
  const data = await res.json();

  return data;
};

const ticketsPromise = fetchTickets();

function App() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  return (
    <div className="min-h-screen px-3 lg:px-0">
      <Navbar></Navbar>
      <Banner
        selectedTickets={selectedTickets}
        resolvedTasks={resolvedTasks}
      ></Banner>
      <Suspense>
        <MainSection
          ticketsPromise={ticketsPromise}
          selectedTickets={selectedTickets}
          setSelectedTickets={setSelectedTickets}
          resolvedTasks={resolvedTasks}
          setResolvedTasks={setResolvedTasks}
        ></MainSection>
      </Suspense>
    </div>
  );
}

export default App;
