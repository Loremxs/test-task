import { Card, Heading, HStack, Stack, Text, Spacer } from "@chakra-ui/react";
import StatusBadge from "./StatusBadge";
import Priority from "./Priority";
import InfoBadge from "./InfoBadge";

const TicketsCard = ({ ticket, priority }) => {
  return (
    <Card.Root size="sm" px={3} py={2} borderRadius="md" shadow="sm" minH={94}>
      <Stack>
        <HStack align="flex-start">
          <Heading size="sm">{ticket.topic}</Heading>
          <Spacer />
          <HStack>
            <Priority priority={priority} hideText />
            <StatusBadge status={ticket.status} />
          </HStack>
        </HStack>
        <HStack justify="space-between" align="center">
          <HStack>
            <InfoBadge info={ticket.number} />
            <Text color="gray.500" fontSize="sm">
              {ticket.pharmacyName}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="medium" fontSize="sm">
              {ticket.resolution}
            </Text>
          </HStack>
        </HStack>
      </Stack>
    </Card.Root>
  );
};

export default TicketsCard;
