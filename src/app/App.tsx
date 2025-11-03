import "./App.css";
import NavbarContainer from "./components/ui/Navbar/NavbarContainer";
import Directory from "./layouts/Directory";
import Reports from "./layouts/Reports";
import Profile from "./layouts/Profile";
import Exit from "./layouts/Exit";
import { Route, Routes } from "react-router";
import TicketsList from "./layouts/Tickets";

function App() {
  return (
    <>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<TicketsList />} />
        <Route path="/reports" element={<Directory />} />
        <Route path="/directory" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </>
  );
}

export default App;
