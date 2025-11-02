import { Link as ChakraLink } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import "../../../styles/Navbar.css";

type NavLinkProps = {
  to: string;
  children: React.ReactNode;
};

const NavLink = ({ to, children }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <ChakraLink
      as={Link}
      to={to}
      className={`nav-link ${isActive ? "active" : ""}`}
    >
      {children}
    </ChakraLink>
  );
};

export default NavLink;
