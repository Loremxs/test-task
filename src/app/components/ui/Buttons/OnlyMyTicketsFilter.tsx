import { Button, useBreakpointValue } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

const OnlyMyTicketsFilter = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <Button variant={"subtle"} size={isMobile ? "xs" : "md"}>
      <FiFilter opacity={0.4} /> {!isMobile && "Показать только мои"}
    </Button>
  );
};
export default OnlyMyTicketsFilter;
