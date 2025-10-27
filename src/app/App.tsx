import "./App.css";
import Navbar from "./components/ui/Navbar";
import TicketsListPage from "./components/page/TicketsListPage";
import Directory from "./layouts/Directory";
import Reports from "./layouts/Reports";
import Profile from "./layouts/Profile";
import Exit from "./layouts/Exit";
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<TicketsListPage />} />
        <Route path="/reports" element={<Directory />} />
        <Route path="/directory" element={<Reports />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </>
  );
}

export default App;
