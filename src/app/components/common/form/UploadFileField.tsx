import { useRef, useCallback } from "react";
import { Box, FileUpload, Icon, Button } from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";
import CustomFileUploadList from "../../ui/CustomFileUploadList";
import { useBreakpointValue } from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";
const UploadFileField = ({ label, placeholder, value = [], onChange }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const inputRef = useRef(null);
  const handleFileChange = useCallback(
    (e) => {
      const newFiles = Array.from(e.acceptedFiles || []);
      onChange([...value, ...newFiles]);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [onChange, value]
  );
  const handleRemove = useCallback(
    (index) => {
      const updated = value.filter((_, i) => i !== index);
      onChange(updated);
    },
    [onChange, value]
  );

  return isMobile ? (
    <FileUpload.Root
      alignItems="stretch"
      onFileChange={handleFileChange}
      key={value.length}
    >
      <CustomFileUploadList files={value} onRemove={handleRemove} />
      <FileUpload.HiddenInput ref={inputRef} key={value.length} />

      <FileUpload.Trigger asChild>
        <Button w="full" variant="solid" size="md">
          <FiPlus /> Прикрепить файлы
        </Button>
      </FileUpload.Trigger>
    </FileUpload.Root>
  ) : (
    <FileUpload.Root
      alignItems="stretch"
      maxFiles={10}
      onFileChange={handleFileChange}
      key={value?.length}
      gap={1}
    >
      <FileUpload.HiddenInput ref={inputRef} key={value.length} />
      <FileUpload.Label fontSize={"12px"} fontWeight={400}>
        {label}
      </FileUpload.Label>
      <FileUpload.Dropzone
        cursor="pointer"
        minH="100px"
        p={3}
        borderRadius="14px"
        borderColor={"#B0B0B0"}
      >
        <FileUpload.DropzoneContent>
          <Box color="gray.500" fontSize="sm">
            {placeholder}
          </Box>
        </FileUpload.DropzoneContent>
        <Icon as={CiImageOn} boxSize={6} />
      </FileUpload.Dropzone>

      <CustomFileUploadList files={value} onRemove={handleRemove} />
    </FileUpload.Root>
  );
};

export default UploadFileField;
