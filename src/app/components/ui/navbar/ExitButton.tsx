import { Button, HStack } from "@chakra-ui/react";
import { RxExit } from "react-icons/rx";

const ExitButton = () => {
  return (
    <HStack>
      <Button variant="surface" size={"md"}>
        <RxExit /> Выйти
      </Button>
    </HStack>
  );
};
export default ExitButton;
