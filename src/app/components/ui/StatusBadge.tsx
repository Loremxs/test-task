import { Badge } from "@chakra-ui/react";
import type { TStatus } from "@/app/types/types";
import { statusesConfig } from "@/app/constants/statuses";
import "./StatusBadge.css";

type StatusProps = {
  status: TStatus;
};

const StatusBadge: React.FC<StatusProps> = ({ status }) => {
  return (
    <Badge color={"black"} className={`status-badge-color-${status}`}>
      {statusesConfig[status].localization}
    </Badge>
  );
};

export default StatusBadge;
