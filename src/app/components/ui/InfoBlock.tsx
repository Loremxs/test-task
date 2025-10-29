import { Box, HStack, Icon, Text, List } from "@chakra-ui/react";
import { IoWarningSharp, IoCloseSharp } from "react-icons/io5";
type InfoBlockProps = {
  type: "warning" | "danger";
  title: string;
  list: string[];
};

const InfoBlock = ({ type, title, list }: InfoBlockProps) => {
  let color;
  let icon;
  let borderColor;
  let iconColor;
  let bg;
  let size;
  switch (type) {
    case "warning":
      color = "#FFFAD4";
      icon = IoWarningSharp;
      borderColor = "yellow.200";
      iconColor = "";
      size = "sm";
      bg = "#FFFAD4";
      break;
    case "danger":
      color = "#FFECEC";
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
      borderRadius="md"
      p={4}
      border="1px solid"
      borderColor={borderColor}
      w="full"
    >
      <HStack>
        <Icon as={icon} color={iconColor} size={size} />
        <Text>{title}</Text>
      </HStack>
      <List.Root as="ul" pl={4} fontSize="xs" width={220}>
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
