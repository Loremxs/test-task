import { Card, Heading, HStack, Stack, Text, Spacer } from "@chakra-ui/react";
import StatusBadge from "../Ticket/StatusBadge";
import PriorityInfo from "../Ticket/PriorityInfo";
import InfoBadge from "../Ticket/InfoBadge";
import TimerInfo from "../Ticket/TimerInfo";
import type { Ticket, Priority } from "@/app/types/ticket";

type TicketsCardProps = {
  ticket: Ticket;
  priority: Priority;
};

const TicketsCard = ({ ticket, priority }: TicketsCardProps) => {
  return (
    <Card.Root
      size="sm"
      borderRadius="md"
      mx={1}
      minH="94px"
      display="flex"
      flexDirection="column"
    >
      <Stack mx={3} my={3}>
        <HStack align="flex-start" justify="space-between">
          <Heading size="sm" fontWeight={400}>
            {ticket.topic}
          </Heading>
          <Spacer />
          <HStack>
            <PriorityInfo priority={priority} hideText />
            <StatusBadge status={ticket.status} />
          </HStack>
        </HStack>

        <HStack justify="space-between" align="center" mt={4}>
          <HStack>
            <InfoBadge info={ticket.number} />
            <Text color="gray.500" fontSize="sm">
              {ticket.pharmacyName}
            </Text>
          </HStack>
          <TimerInfo timer={ticket.resolution}></TimerInfo>
        </HStack>
      </Stack>
    </Card.Root>
  );
};

export default TicketsCard;
