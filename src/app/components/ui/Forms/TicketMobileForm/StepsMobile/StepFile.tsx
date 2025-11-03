import { VStack, Box } from "@chakra-ui/react";
import UploadFileField from "../../../../common/form/UploadFileField";
import HeaderModalMobile from "../../../Mobile/HeaderModalMobile";
import type { TicketFormData } from "@/app/types/forms";
import React from "react";

type StepFilesProps = {
  files: File[];
  setData: React.Dispatch<React.SetStateAction<TicketFormData>>;
  onBack: () => void;
};

const StepFiles: React.FC<StepFilesProps> = ({ files, setData, onBack }) => {
  const handleChange = (newFiles: File[]) => {
    setData((prev) => ({ ...prev, files: newFiles }));
  };

  return (
    <VStack align={"stretch"} h={"100%"}>
      <HeaderModalMobile title="Прикрепленные файлы" onClose={onBack} />
      <Box flex={1} h={"100%"}>
        <UploadFileField value={files} onChange={handleChange} />
      </Box>
    </VStack>
  );
};

export default StepFiles;
