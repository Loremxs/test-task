import {
  Flex,
  HStack,
  Link as ChakraLink,
  Spacer,
  Separator,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import AvatarProfile from "./AvatarProfile";
import ExitButton from "./ExitButton";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  // Сделать обертку в виде компонента в линк
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={6}
      py={4}
      borderBottom="1px solid"
      borderColor="#D9E1EC"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <HStack spacing={6} px={20}>
        <ChakraLink as={Link} to="/" color={isActive ? "#1C1C1C" : "#B0B0B0"}>
          Заявки
        </ChakraLink>

        <ChakraLink as={Link} to="/reports">
          Отчёты
        </ChakraLink>

        <ChakraLink as={Link} to="/directory">
          Справочники
        </ChakraLink>
      </HStack>

      <Spacer />
      <HStack spacing={4}>
        <ChakraLink as={Link} to="/profile">
          <AvatarProfile />
        </ChakraLink>

        <ChakraLink as={Link} to="/exit">
          <ExitButton />
        </ChakraLink>
      </HStack>
      {/* <Separator variant="solid" size="md" /> */}
    </Flex>
  );
};

export default Navbar;
