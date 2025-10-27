import { HStack, Text, Icon } from "@chakra-ui/react";
import { CgShapeRhombus } from "react-icons/cg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { TPriority } from "@/app/types/types";

type PriorityProps = {
  priority: TPriority;
};

const Priority: React.FC<PriorityProps> = ({ priority }) => {
  let icon;
  let color;
  const priorityId = priority._id;
  switch (priorityId) {
    case "pr_1":
      icon = MdKeyboardDoubleArrowUp;
      color = "red.600";
      break;
    case "pr_2":
      icon = IoIosArrowUp;
      color = "red.500";
      break;
    case "pr_3":
      icon = CgShapeRhombus;
      color = "orange.400";
      break;
    case "pr_4":
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
      <Text>{priority.name}</Text>
    </HStack>
  );
};

export default Priority;
