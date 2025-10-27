import { Button, HStack } from "@chakra-ui/react";
import { FiFilter } from "react-icons/fi";

const OnlyMyTicketsFilter = () => {
  return (
    <HStack>
      <Button variant="subtle">
        <FiFilter /> Показать только мои
      </Button>
    </HStack>
  );
};
export default OnlyMyTicketsFilter;
