import { Button, HStack, Box } from "@chakra-ui/react";
import Modal from "../common/modal/Modal";
import TicketAddFormDesktop from "./TicketAddFormDesktop";
import TicketAddFormMobile from "./TicketAddFormMobile";
import { FiPlus } from "react-icons/fi";
import { useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";
const TicketModal = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const initialData = {
    pharmacy: [],
    category: [],
    guarantee: false,
    topic: "",
    priority: ["pr_3"],
    description: "",
    files: [],
  };
  const [data, setData] = useState(initialData);
  const handleModalChange = (open: boolean) => {
    if (!open) {
      setData(initialData);
    }
  };

  const trigger = isMobile ? (
    <Box position="fixed" bottom="10px" right="16px" zIndex="200">
      <Button variant="solid" size="md">
        <FiPlus /> Создать новую заявку
      </Button>
    </Box>
  ) : (
    <Button variant="solid">
      <FiPlus />
      Создать новую заявку
    </Button>
  );
  const footer = (
    <HStack>
      <Button>Создать заявку</Button>
      <Button variant="outline">Отмена</Button>
    </HStack>
  );

  return (
    <Modal
      trigger={trigger}
      title={"Создание заявки"}
      footer={footer}
      onOpenChange={handleModalChange}
      hideFooter
    >
      {isMobile ? (
        <TicketAddFormMobile
          data={data}
          setData={setData}
          initialData={initialData}
        />
      ) : (
        <TicketAddFormDesktop
          data={data}
          setData={setData}
          initialData={initialData}
        />
      )}
    </Modal>
  );
};

export default TicketModal;
