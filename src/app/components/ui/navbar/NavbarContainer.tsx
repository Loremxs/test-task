import { useBreakpointValue } from "@chakra-ui/react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const NavbarContainer = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? <NavbarMobile /> : <NavbarDesktop />;
};

export default NavbarContainer;
