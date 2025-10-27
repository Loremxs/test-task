import { HStack } from "@chakra-ui/react";
import PharmacyName from "./PharmacyName";
import PharmacyCode from "./PharmacyCode";

type PharmacyProps = {
  pharmacyCode: string;
  pharmacyName: string;
};

const Pharmacy: React.FC<PharmacyProps> = ({ pharmacyCode, pharmacyName }) => {
  return (
    <HStack>
      <PharmacyCode pharmacyCode={pharmacyCode} />
      <PharmacyName pharmacyName={pharmacyName} />
    </HStack>
  );
};

export default Pharmacy;
