import { useBreakpointValue } from "@chakra-ui/react";
import TicketsListPageDesktop from "../components/page/desktop/TicketsListPageDesktop";
import TicketsListPageMobile from "../components/page/mobile/TicketsListPageMobile";

const TicketsList = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <>{isMobile ? <TicketsListPageMobile /> : <TicketsListPageDesktop />}</>
  );
};

export default TicketsList;
