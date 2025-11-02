import { useRef, useCallback } from "react";
import {
  Box,
  FileUpload,
  Icon,
  Button,
  HStack,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { CiImageOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import CustomFileUploadList from "../../ui/CustomFileUploadList";
import type { UploadFileFieldProps } from "@/app/types/forms";

const UploadFileField: React.FC<UploadFileFieldProps> = ({
  label,
  placeholder,
  value = [],
  onChange,
}) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = useCallback(
    (e: { acceptedFiles?: File[] }) => {
      const newFiles = Array.from(e.acceptedFiles || []);
      onChange([...value, ...newFiles]);
      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [onChange, value]
  );

  const handleRemove = useCallback(
    (index: number) => {
      const updated = value.filter((_, i) => i !== index);
      onChange(updated);
    },
    [onChange, value]
  );

  if (isMobile) {
    return (
      <FileUpload.Root
        alignItems="stretch"
        onFileChange={handleFileChange}
        key={value.length}
        h={"100%"}
        justifyContent={"space-between"}
        maxFiles={3}
      >
        <Box pb={"100px"}>
          <CustomFileUploadList files={value} onRemove={handleRemove} />
        </Box>
        <FileUpload.HiddenInput ref={inputRef} key={value.length} />
        <FileUpload.Trigger asChild>
          <Button
            w={"full"}
            variant="solid"
            position={"fixed"}
            bottom={0}
            mx={"10px"}
            mb={"10px"}
            style={{ width: "calc(100% - 20px)" }}
          >
            <FiPlus /> Прикрепить файлы
          </Button>
        </FileUpload.Trigger>
      </FileUpload.Root>
    );
  }

  const hasFiles = value.length > 0;

  return (
    <FileUpload.Root
      alignItems="stretch"
      maxFiles={3}
      onFileChange={handleFileChange}
      key={value.length}
      gap={1}
      w="full"
    >
      <FileUpload.HiddenInput ref={inputRef} key={value.length} />

      <FileUpload.Label fontSize="12px" fontWeight={400}>
        {label}
      </FileUpload.Label>

      {hasFiles ? (
        <HStack align="flex-start" w="full">
          {value.length < 3 && (
            <FileUpload.Dropzone
              flex="1"
              cursor="pointer"
              minH="104px"
              p={3}
              borderRadius="14px"
              borderColor="#B0B0B0"
              borderWidth="1px"
            >
              <VStack justify="center" align="center">
                <Icon as={CiImageOn} boxSize={6} color="gray.500" />
                <Box color="gray.500" fontSize="sm" textAlign="center">
                  {placeholder}
                </Box>
              </VStack>
            </FileUpload.Dropzone>
          )}

          <Box flex="1" minW="240px">
            <CustomFileUploadList files={value} onRemove={handleRemove} />
          </Box>
        </HStack>
      ) : (
        <FileUpload.Dropzone
          cursor="pointer"
          minH="104px"
          p={3}
          borderRadius="14px"
          borderColor="#B0B0B0"
          borderWidth="1px"
          w="full"
        >
          <VStack justify="center" align="center">
            <Icon as={CiImageOn} boxSize={6} color="gray.500" />
            <Box color="gray.500" fontSize="sm" textAlign="center">
              {placeholder}
            </Box>
          </VStack>
        </FileUpload.Dropzone>
      )}
    </FileUpload.Root>
  );
};

export default UploadFileField;
