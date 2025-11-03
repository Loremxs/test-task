import { Button, HStack } from "@chakra-ui/react";
import { MdPictureAsPdf } from "react-icons/md";

const PDFExportButton = () => {
  return (
    <HStack>
      <Button variant="surface">
        <MdPictureAsPdf /> Экспорт
      </Button>
    </HStack>
  );
};
export default PDFExportButton;
