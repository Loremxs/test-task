import { Link as RouterLink, Routes, Route } from "react-router-dom";
import { Link } from "@chakra-ui/react";
import TicketsListPage from "./TicketsListPage";
import Directory from "./Directory";

const RoutesTest = () => {
  return (
    <>
      <Link as={RouterLink} to="/">
        Заявки
      </Link>
      <Link as={RouterLink} to="/reports">
        Отчеты
      </Link>
      <Link as={RouterLink} to="/directory">
        Справочники
      </Link>
      <Routes>
        <Route path="/" element={<TicketsListPage />}></Route>
        <Route path="/reports" element={<Directory />}></Route>
        <Route path="/directory" element={<Directory />}></Route>
      </Routes>
    </>
  );
};

export default RoutesTest;
