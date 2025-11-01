import { Box, HStack, Text, List } from "@chakra-ui/react";
import { IoWarningSharp, IoCloseSharp } from "react-icons/io5";
import { useBreakpointValue } from "@chakra-ui/react";

type InfoBlockProps = {
  type: "warning" | "danger";
  title: string;
  list: string[];
};

const InfoBlock = ({ type, title, list }: InfoBlockProps) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  let icon;
  let borderColor;
  let iconColor;
  let bg;
  let size;
  switch (type) {
    case "warning":
      icon = IoWarningSharp;
      borderColor = "yellow.200";
      iconColor = "";
      size = "";
      bg = "#FFFAD4";
      break;
    case "danger":
      icon = IoCloseSharp;
      size = "md";
      borderColor = "red.200";
      iconColor = "red.500";
      bg = "#FFECEC";
      break;
  }
  return (
    <Box
      bg={bg}
      borderRadius="10px"
      p={2}
      borderColor={borderColor}
      w="full"
      flex="1"
      fontSize={isMobile ? "12px" : "10px"}
      color="#1C1C1C"
    >
      <HStack>
        <Text fontSize={isMobile ? "14px" : "10px"}>{title}</Text>
      </HStack>
      <List.Root as="ul" pl={4} pt={2} lineHeight={"shorter"}>
        {list.map((item, i) => (
          <List.Item as="li" key={i}>
            {item}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default InfoBlock;
