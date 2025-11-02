import { HStack, IconButton, Text, Box } from "@chakra-ui/react";
import { IoMdArrowBack } from "react-icons/io";

type HeaderModalMobileProps = {
  title: string;
  onClose: () => void;
};

const HeaderModalMobile = ({ title, onClose }: HeaderModalMobileProps) => {
  return (
    <Box borderBottom="1px solid" borderColor="#DDDDDD">
      <HStack align="center">
        <IconButton
          aria-label="Назад"
          variant="plain"
          alignSelf="flex-start"
          onClick={onClose}
          ml={4}
          mb={4}
        >
          <IoMdArrowBack />
          <Text fontSize={"20px"} fontWeight={600}>
            {title}
          </Text>
        </IconButton>
      </HStack>
    </Box>
  );
};

export default HeaderModalMobile;
