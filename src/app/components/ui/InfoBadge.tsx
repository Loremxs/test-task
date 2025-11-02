import { Badge } from "@chakra-ui/react";

type InfoBadgeProps = {
  info: string;
};

const InfoBadge = ({ info }: InfoBadgeProps) => {
  return <Badge variant="subtle">{info}</Badge>;
};

export default InfoBadge;
