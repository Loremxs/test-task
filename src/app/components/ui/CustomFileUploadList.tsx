import {
  VStack,
  HStack,
  Box,
  Text,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineFile } from "react-icons/ai";
import { useBreakpointValue } from "@chakra-ui/react";

type CustomFileUploadListProps = {
  files: File[];
  onRemove?: (index: number) => void;
};

const getFileIconOrPreview = (file: File, isMobile: boolean) => {
  const ext = file.name.split(".").pop()?.toLowerCase();

  if (
    ["png", "jpg", "jpeg", "gif", "bmp", "webp", "jfif", "avif"].includes(
      ext || ""
    )
  ) {
    const url = URL.createObjectURL(file);
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return (
      <Image
        src={url}
        alt={file.name}
        boxSize="24px"
        objectFit="cover"
        borderRadius="md"
        width={isMobile ? "60px" : "24px"}
        height={isMobile ? "40px" : "16px"}
      />
    );
  }

  if (ext === "pdf") {
    return (
      <Box
        bg="white"
        color="red.500"
        border="1px solid"
        borderColor="red.500"
        fontWeight="bold"
        fontSize={isMobile ? "14px" : "8px"}
        width={isMobile ? "60px" : "24px"}
        height={isMobile ? "40px" : "16px"}
        borderRadius="sm"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        PDF
      </Box>
    );
  }

  return <AiOutlineFile size={20} color="gray" />;
};

const CustomFileUploadList: React.FC<CustomFileUploadListProps> = ({
  files = [],
  onRemove,
}) => {
  if (!files.length) return null;
  const isMobile = useBreakpointValue({ base: true, md: false });
  return (
    <VStack align="stretch" gap={1}>
      {files.map((file, index) => (
        <HStack
          key={index}
          bg="#F1F1F1"
          border="1px solid"
          borderColor="gray.200"
          rounded="4px"
          pl={1}
          justify="space-between"
          h={isMobile ? "60px" : "32px"}
          mx={4}
        >
          <HStack>
            {getFileIconOrPreview(file, !!isMobile)}
            <Text fontSize="12px" color="gray.800">
              {file.name}
            </Text>
          </HStack>
          {onRemove && (
            <CloseButton onClick={() => onRemove(index)} h={"32px"} />
          )}
        </HStack>
      ))}
    </VStack>
  );
};

export default CustomFileUploadList;
