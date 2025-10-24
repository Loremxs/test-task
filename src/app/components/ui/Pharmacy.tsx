import { HStack, Badge, Text } from "@chakra-ui/react";

type PharmacyProps = {
  pharmacyCode: string;
  pharmacyName: string;
};

const Pharmacy: React.FC<PharmacyProps> = ({ pharmacyCode, pharmacyName }) => {
  return (
    <HStack>
      <Badge variant="subtle">{pharmacyCode}</Badge>
      <Text>{pharmacyName}</Text>
    </HStack>
  );
};

export default Pharmacy;
