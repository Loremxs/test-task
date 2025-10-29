import { Button, HStack } from "@chakra-ui/react";
import Modal from "../common/modal/Modal";
import TicketAddForm from "./TicketAddForm";
import { FiPlus } from "react-icons/fi";

const TicketModal = () => {
  const trigger = (
    <Button variant="solid">
      <FiPlus />
      Создать новую заявку
    </Button>
  );
  const footer = (
    <HStack>
      <Button variant="outline">Отмена</Button>
      <Button>Создать заявку</Button>
    </HStack>
  );

  return (
    <Modal
      trigger={trigger}
      title={"Создание заявки"}
      footer={footer}
      hideFooter
    >
      <TicketAddForm onClose={() => setOpen(false)} />
    </Modal>
  );
};

export default TicketModal;
