import { VStack } from "@chakra-ui/react";
import UploadFileField from "../common/form/UploadFileField";
import HeaderModalMobile from "./HeaderModalMobile";
const StepFiles = ({ files, setData, onBack }) => {
  const handleChange = (newFiles) => {
    setData((prev) => ({ ...prev, files: newFiles }));
  };

  return (
    <VStack align="stretch">
      <HeaderModalMobile title={"Прикрепленные файлы"} onClose={onBack} />
      <UploadFileField value={files} onChange={handleChange} />
    </VStack>
  );
};

export default StepFiles;
