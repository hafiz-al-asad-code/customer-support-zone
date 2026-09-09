import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import MainSection from "./components/MainSection/MainSection";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader";

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
    <div className="min-h-screen">
      <Navbar></Navbar>

      <div className="px-3 lg:px-0">
        <Banner
          selectedTickets={selectedTickets}
          resolvedTasks={resolvedTasks}
        ></Banner>

        <Suspense fallback={<Loader></Loader>}>
          <MainSection
            ticketsPromise={ticketsPromise}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
            resolvedTasks={resolvedTasks}
            setResolvedTasks={setResolvedTasks}
          ></MainSection>
        </Suspense>
      </div>

      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
