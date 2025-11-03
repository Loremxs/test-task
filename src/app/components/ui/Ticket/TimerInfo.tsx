import { FaRegCircleCheck } from "react-icons/fa6";
import { HStack } from "@chakra-ui/react";
type TimerInfoProps = {
  timer?: string;
};

const TimerInfo: React.FC<TimerInfoProps> = ({ timer }) => {
  if (timer === "—") {
    return <HStack color="gray.600">{timer}</HStack>;
  }
  return (
    <HStack color={"#0E7411"} gap={1} fontSize={"14px"}>
      <FaRegCircleCheck />
      {timer}
    </HStack>
  );
};

export default TimerInfo;
