import { HStack, Text, Icon } from "@chakra-ui/react";
import { CgShapeRhombus } from "react-icons/cg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { TPriority } from "@/types";

type PriorityProps = {
  priority: TPriority;
};

const Priority: React.FC<PriorityProps> = ({ priority }) => {
  let icon;
  let color;
  const label = priority.name;
  switch (label.toLowerCase()) {
    case "критич.":
      icon = MdKeyboardDoubleArrowUp;
      color = "red.600";
      break;
    case "высокий":
      icon = IoIosArrowUp;
      color = "red.500";
      break;
    case "средний":
      icon = CgShapeRhombus;
      color = "orange.400";
      break;
    case "низкий":
      icon = IoIosArrowDown;
      color = "blue.600";
      break;
    default:
      icon = CgShapeRhombus;
      color = "gray.400";
  }

  return (
    <HStack>
      <Icon as={icon} color={color} />
      <Text>{label}</Text>
    </HStack>
  );
};

export default Priority;
