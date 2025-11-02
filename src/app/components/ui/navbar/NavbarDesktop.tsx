import { Flex, HStack, Spacer } from "@chakra-ui/react";
import AvatarProfile from "../AvatarProfile";
import ExitButton from "../ExitButton";
import NavLink from "./NavLink";

const Navbar = () => {
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
        <NavLink to="/">Заявки</NavLink>
        <NavLink to="/reports">Отчёты</NavLink>
        <NavLink to="/directory">Справочники</NavLink>
      </HStack>
      <Spacer />
      <HStack>
        <NavLink to="/profile">
          <AvatarProfile />
        </NavLink>
        <NavLink to="/exit">
          <ExitButton />
        </NavLink>
      </HStack>
    </Flex>
  );
};

export default Navbar;
