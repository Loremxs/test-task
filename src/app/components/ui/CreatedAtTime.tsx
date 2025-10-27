import { format } from "date-fns";
import { ru } from "date-fns/locale";

const CreatedAtTime = ({ createdAt }) => {
  function formatDate(dateString: string) {
    return format(new Date(dateString), "dd.MM.yyyy HH:mm:ss", { locale: ru });
  }
  return formatDate(createdAt);
};

export default CreatedAtTime;
