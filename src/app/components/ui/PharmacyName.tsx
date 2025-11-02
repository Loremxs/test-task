import { Text } from "@chakra-ui/react";

type PharmacyNameProps = {
  pharmacyName: string;
};

const PharmacyName = ({ pharmacyName }: PharmacyNameProps) => {
  return <Text>{pharmacyName}</Text>;
};

export default PharmacyName;
