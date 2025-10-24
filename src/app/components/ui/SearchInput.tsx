import { Input, InputGroup } from "@chakra-ui/react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  return (
    <InputGroup startElement={<HiOutlineMagnifyingGlass />}>
      <Input
        value={value}
        placeholder="Поиск по номеру или теме заказа"
        onChange={(e) => onChange(e.target.value)}
      />
    </InputGroup>
  );
};

export default SearchInput;
