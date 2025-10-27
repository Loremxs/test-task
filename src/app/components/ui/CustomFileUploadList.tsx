import { VStack, HStack, Box, Text, Image, IconButton } from "@chakra-ui/react";
import { AiOutlineFile } from "react-icons/ai";
import { CloseButton } from "@chakra-ui/react";

const getFileIconOrPreview = (file) => {
  const ext = file.name.split(".").pop().toLowerCase();

  if (
    ["png", "jpg", "jpeg", "gif", "bmp", "webp", "jfif", "avif"].includes(ext)
  ) {
    const url = URL.createObjectURL(file);
    setTimeout(() => URL.revokeObjectURL(url), 0);
    return (
      <Image
        src={url}
        alt={file.name}
        boxSize="32px"
        objectFit="cover"
        borderRadius="md"
      />
    );
  }
  if (ext === "pdf") {
    return (
      <Box
        bg="red"
        color="white"
        fontWeight="bold"
        fontSize="xs"
        px={2}
        py={1}
        borderRadius="sm"
      >
        PDF
      </Box>
    );
  }

  return <AiOutlineFile size={24} color="gray" />;
};

const CustomFileUploadList = ({ files = [], onRemove }) => {
  if (!files.length) return null;

  return (
    <VStack align="stretch" spacing={2} mt={3}>
      {files.map((file, index) => (
        <HStack
          key={index}
          bg="gray.50"
          border="1px solid"
          borderColor="gray.200"
          rounded="md"
          p={2}
          spacing={3}
          justify="space-between"
        >
          <HStack spacing={3}>
            {getFileIconOrPreview(file)}
            <Text fontSize="sm" color="gray.800" noOfLines={1}>
              {file.name}
            </Text>
          </HStack>
          {onRemove && <CloseButton onClick={() => onRemove(index)} />}
        </HStack>
      ))}
    </VStack>
  );
};

export default CustomFileUploadList;
