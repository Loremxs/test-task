import { Box, HStack, Icon, Text, List } from "@chakra-ui/react";
import { IoWarningSharp, IoClose } from "react-icons/io5";
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
  switch (type) {
    case "warning":
      color = "#FFFAD4";
      icon = IoWarningSharp;
      borderColor = "yellow.200";
      iconColor = "";
      bg = "#FFFAD4";
      break;
    case "danger":
      color = "#FFECEC";
      icon = IoClose;
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
      <HStack mb={2}>
        <Icon as={icon} color={iconColor} />
        <Text fontWeight="semibold">{title}</Text>
      </HStack>
      <List.Root as="ul" pl={4} spacing={1} color="gray.700" fontSize="xs">
        {list.map((item, i) => (
          <List.Item as="li" key={i} mb={1}>
            {item}
          </List.Item>
        ))}
      </List.Root>
    </Box>
  );
};

export default InfoBlock;
