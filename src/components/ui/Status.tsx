import { Badge } from "@chakra-ui/react";
import type { TStatuses } from "@/types";

type StatusProps = {
  status: TStatuses;
};

const Status: React.FC<StatusProps> = ({ status }) => {
  return (
    <Badge colorPalette={status.color} color={"black"}>
      {status.name}
    </Badge>
  );
};

export default Status;
