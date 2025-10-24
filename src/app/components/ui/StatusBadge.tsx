import { Badge } from "@chakra-ui/react";
import type { TStatus } from "@/app/types/types";
import { statusesConfig } from "@/app/constants/statuses";
type StatusProps = {
  status: TStatus;
};

const StatusBadge: React.FC<StatusProps> = ({ status }) => {
  return (
    <Badge
      colorPalette={statusesConfig[status].color}
      color={"black"}
      className="123"
    >
      {statusesConfig[status].localization}
    </Badge>
  );
};

export default StatusBadge;
