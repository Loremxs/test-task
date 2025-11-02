import {
  VStack,
  HStack,
  Box,
  Text,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { AiOutlineFile } from "react-icons/ai";

type CustomFileUploadListProps = {
  files: File[];
  onRemove?: (index: number) => void;
};

const getFileIconOrPreview = (file: File) => {
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
        fontSize="12px"
        px={2}
        py={1}
        borderRadius="sm"
      >
        PDF
      </Box>
    );
  }

  return <AiOutlineFile size={16} color="gray" />;
};

const CustomFileUploadList: React.FC<CustomFileUploadListProps> = ({
  files = [],
  onRemove,
}) => {
  if (!files.length) return null;

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
          h={"32px"}
        >
          <HStack>
            {getFileIconOrPreview(file)}
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
