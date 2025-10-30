import { Flex, HStack, Link as ChakraLink, Spacer } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import AvatarProfile from "../AvatarProfile";
import ExitButton from "../ExitButton";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
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
      bg="white"
      zIndex="1000"
    >
      <HStack px={20}>
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
      <HStack>
        <ChakraLink as={Link} to="/profile">
          <AvatarProfile />
        </ChakraLink>

        <ChakraLink as={Link} to="/exit">
          <ExitButton />
        </ChakraLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;
