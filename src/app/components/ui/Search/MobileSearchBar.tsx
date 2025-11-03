import { useState } from "react";
import { Input, Button, HStack, Box } from "@chakra-ui/react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

type MobileSearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

const MobileSearchBar: React.FC<MobileSearchBarProps> = ({
  value,
  onChange,
}) => {
  const [isSearching, setIsSearching] = useState(false);

  const toggleSearch = () => {
    setIsSearching((prev) => !prev);
    if (isSearching) onChange("");
  };

  return (
    <Box position="fixed" bottom="60px" right="16px" zIndex="100">
      {isSearching ? (
        <HStack
          bg="white"
          border="2px solid"
          borderColor="#1C1C1C"
          borderRadius="lg"
          px="3"
          py="2"
          shadow="md"
          w="60vw"
          maxW="320px"
        >
          <Input
            size="sm"
            variant="subtle"
            placeholder="Поиск..."
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoFocus
          />
          <Button size="sm" variant="ghost" onClick={toggleSearch}>
            Отмена
          </Button>
        </HStack>
      ) : (
        <Button
          size="md"
          shadow="lg"
          onClick={toggleSearch}
          bg={"white"}
          color={"#1C1C1C"}
          borderColor="#1C1C1C"
          border="2px solid"
        >
          <HiOutlineMagnifyingGlass /> Поиск
        </Button>
      )}
    </Box>
  );
};

export default MobileSearchBar;
