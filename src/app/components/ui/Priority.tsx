import { HStack, Text, Icon } from "@chakra-ui/react";
import { CgShapeRhombus } from "react-icons/cg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { TPriority } from "@/app/types/types";
import { additionalInfoByPriorityId } from "@/app/constants/additionalInfoByPriorityId";

type PriorityProps = {
  priority: TPriority;
  showAdditionalInfo?: boolean;
  hideText?: boolean;
};
const Priority: React.FC<PriorityProps> = ({
  priority,
  showAdditionalInfo,
  hideText,
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
    <HStack align="center">
      <Icon as={icon} color={color} boxSize={4} />
      {!hideText && (
        <HStack>
          <Text>{priority.name}:</Text>
          {showAdditionalInfo && (
            <Text color="gray.500" fontSize="sm">
              {additionalInfoByPriorityId[priority._id]}
            </Text>
          )}
        </HStack>
      )}
    </HStack>
  );
};

export default Priority;
