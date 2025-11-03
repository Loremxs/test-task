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
import AvatarProfile from "./AvatarProfile";
import { pagesMobile } from "@/app/constants/pagesMobile";
import { IoMdArrowDropdown } from "react-icons/io";

const NavbarMobile = () => {
  const location = useLocation();

  const currentPage = pagesMobile.find(
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
      zIndex="1000"
      bg={"white"}
    >
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            size="sm"
            variant="plain"
            fontWeight="medium"
            fontSize={"20px"}
          >
            {currentPage}
            <IoMdArrowDropdown />
          </Button>
        </MenuTrigger>

        <Portal>
          <MenuPositioner>
            <MenuContent>
              {pagesMobile.map((page) => (
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
