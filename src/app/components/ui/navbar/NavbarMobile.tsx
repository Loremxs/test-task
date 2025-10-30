import {
  Button,
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
  Portal,
  Flex,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import AvatarProfile from "../AvatarProfile";

const pages = [
  { title: "Заявки", path: "/" },
  { title: "Отчёты", path: "/reports" },
  { title: "Справочники", path: "/directory" },
];

const NavbarMobile = () => {
  const location = useLocation();

  const currentPage = pages.find(
    (page) => page.path === location.pathname
  )?.title;

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      px={4}
      py={4}
      borderBottom="1px solid"
      borderColor="#D9E1EC"
      position="sticky"
      top="0"
      zIndex="100"
    >
      <MenuRoot>
        <MenuTrigger asChild>
          <Button size="sm" variant="outline" fontWeight="medium">
            {currentPage}
          </Button>
        </MenuTrigger>

        <Portal>
          <MenuPositioner>
            <MenuContent>
              {pages.map((page) => (
                <MenuItem key={page.path} asChild value={page.title}>
                  <Link to={page.path}>{page.title}</Link>
                </MenuItem>
              ))}
            </MenuContent>
          </MenuPositioner>
        </Portal>
      </MenuRoot>
      <AvatarProfile />
    </Flex>
  );
};

export default NavbarMobile;
