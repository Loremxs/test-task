import { HStack, Text, Icon } from "@chakra-ui/react";
import { CgShapeRhombus } from "react-icons/cg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { TPriority } from "@/app/types/types";

type PriorityProps = {
  priority: TPriority;
  showAdditionalInfo?: boolean;
};
const additionalInfoByPriorityId = {
  pr_1: "срочно требуется помощь",
  pr_2: "влияет на эффективность, мешает работать",
  pr_3: "влияет на эффективность, но не стопорит",
  pr_4: "требуется не скорая помощь",
};
const Priority: React.FC<PriorityProps> = ({
  priority,
  showAdditionalInfo,
}) => {
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
    <HStack spacing={1} align="center">
      <Icon as={icon} color={color} />
      <HStack spacing={1}>
        <Text>{priority.name}</Text>
        {showAdditionalInfo && (
          <Text color="gray.500">
            {additionalInfoByPriorityId[priority._id]}
          </Text>
        )}
      </HStack>
    </HStack>
  );
};

export default Priority;
