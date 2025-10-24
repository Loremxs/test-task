import { Link, Routes, Route } from "react-router-dom";
import TicketsListPage from "../components/page/TicketsListPage";
import Directory from "./Directory";
import Reports from "./Reports";

const RoutesTest = () => {
  return (
    <>
      <Link to="/">Заявки</Link>
      <Link to="/reports">Отчеты</Link>
      <Link to="/directory">Справочники</Link>
      <Routes>
        <Route path="/" element={<TicketsListPage />}></Route>
        <Route path="/reports" element={<Directory />}></Route>
        <Route path="/directory" element={<Reports />}></Route>
      </Routes>
    </>
  );
};

export default RoutesTest;
