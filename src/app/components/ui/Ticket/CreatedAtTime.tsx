import { Text } from "@chakra-ui/react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

type CreatedAtTimeProps = {
  createdAt: string;
};

const CreatedAtTime = ({ createdAt }: CreatedAtTimeProps) => {
  const formatted = format(new Date(createdAt), "dd.MM.yyyy HH:mm:ss", {
    locale: ru,
  });
  const [date, time] = formatted.split(" ");

  return (
    <Text>
      {date}{" "}
      <Text as="span" opacity={0.4}>
        {time}
      </Text>
    </Text>
  );
};

export default CreatedAtTime;
