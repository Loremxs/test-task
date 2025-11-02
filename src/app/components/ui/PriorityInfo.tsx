import { HStack, Text, Icon } from "@chakra-ui/react";
import { CgShapeRhombus } from "react-icons/cg";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import type { Priority } from "@/app/types/ticket";
import { additionalInfoByPriorityId } from "@/app/constants/additionalInfoByPriorityId";

type PriorityProps = {
  priority: Priority;
  showAdditionalInfo?: boolean;
  hideText?: boolean;
};
const PriorityInfo: React.FC<PriorityProps> = ({
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
    <HStack align="center" className="priority-info-block">
      <Icon as={icon} color={color} boxSize={4} />
      {!hideText && (
        <HStack>
          <Text>{priority.name}:</Text>
          {showAdditionalInfo && (
            <Text color="gray.500">
              {additionalInfoByPriorityId[priority._id]}
            </Text>
          )}
        </HStack>
      )}
    </HStack>
  );
};

export default PriorityInfo;
