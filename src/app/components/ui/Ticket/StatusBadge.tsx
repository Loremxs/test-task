import { Badge } from "@chakra-ui/react";
import type { Status } from "@/app/types/ticket";
import { statusesConfig } from "@/app/constants/statuses";
import "../../../styles/StatusBadge.css";

type StatusProps = {
  status: Status;
};

const StatusBadge: React.FC<StatusProps> = ({ status }) => {
  return (
    <Badge color={"black"} className={`status-badge-color-${status}`}>
      {statusesConfig[status].localization}
    </Badge>
  );
};

export default StatusBadge;
