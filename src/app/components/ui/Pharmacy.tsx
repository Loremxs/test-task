import { HStack } from "@chakra-ui/react";
import PharmacyName from "./PharmacyName";
import InfoBadge from "./InfoBadge";
type PharmacyProps = {
  pharmacyCode: string;
  pharmacyName: string;
};

const Pharmacy: React.FC<PharmacyProps> = ({ pharmacyCode, pharmacyName }) => {
  return (
    <HStack>
      <InfoBadge info={pharmacyCode} />
      <PharmacyName pharmacyName={pharmacyName} />
    </HStack>
  );
};

export default Pharmacy;
