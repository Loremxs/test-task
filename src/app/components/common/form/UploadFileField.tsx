import { useRef, useCallback } from "react";
import { Box, FileUpload, Icon } from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";
import CustomFileUploadList from "../../ui/CustomFileUploadList";

const UploadFileField = ({ label, placeholder, value = [], onChange }) => {
  const inputRef = useRef(null);

  const handleFileChange = useCallback(
    (e) => {
      const newFiles = Array.from(e.acceptedFiles || []);

      const uniqueFiles = newFiles.filter(
        (newFile) =>
          !value.some(
            (existing) =>
              existing.name === newFile.name && existing.size === newFile.size
          )
      );
      onChange([...value, ...uniqueFiles]);
      // странная хуйня показать роме
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

  return (
    <FileUpload.Root
      maxW="xl"
      alignItems="stretch"
      maxFiles={10}
      onFileChange={handleFileChange}
      key={value?.length}
    >
      <FileUpload.HiddenInput ref={inputRef} key={value.length} />
      <FileUpload.Label>{label}</FileUpload.Label>
      <FileUpload.Dropzone cursor="pointer">
        <Icon as={CiImageOn} boxSize={6} color="gray.400" />
        <FileUpload.DropzoneContent>
          <Box color="gray.500" fontSize="sm">
            {placeholder}
          </Box>
        </FileUpload.DropzoneContent>
      </FileUpload.Dropzone>

      <CustomFileUploadList files={value} onRemove={handleRemove} />
    </FileUpload.Root>
  );
};

export default UploadFileField;
