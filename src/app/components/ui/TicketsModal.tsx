import { Button } from "@chakra-ui/react";
import Modal from "../common/modal/Modal";
import TicketAddForm from "./TicketAddForm";
import { FiPlus } from "react-icons/fi";

const TicketModal = ({ tickets, categories, priorities }) => {
  const trigger = (
    <Button variant="solid">
      <FiPlus />
      Создать новую заявку
    </Button>
  );
  const footer = (
    <>
      <Button variant="outline">Отмена</Button>
      <Button>Создать заявку</Button>
    </>
  );

  return (
    <Modal trigger={trigger} title={"Создание заявки"} footer={footer}>
      <TicketAddForm
        tickets={tickets}
        categories={categories}
        priorities={priorities}
      />
    </Modal>
  );
};

export default TicketModal;
