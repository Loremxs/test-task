import { useState } from "react";
import { Box } from "@chakra-ui/react";
import StepForm from "../StepsMobile/StepForm";
import StepFiles from "../StepsMobile/StepFile";
import StepInfo from "../StepsMobile/StepInfo";
import type { TicketFormBaseProps } from "@/app/types/forms";
type TicketAddFormMobileProps = TicketFormBaseProps;

const TicketAddFormMobile = ({
  onClose,
  data,
  setData,
  initialData,
}: TicketAddFormMobileProps) => {
  const [currentPage, setCurrentPage] = useState<"form" | "files" | "info">(
    "form"
  );

  const [info, setInfo] = useState(null);
  return (
    <Box flex={1} h={"100%"}>
      {currentPage === "form" && (
        <StepForm
          data={data}
          setData={setData}
          initialData={initialData}
          onAttachFiles={() => setCurrentPage("files")}
          onShowInfo={(info) => {
            setInfo(info);
            setCurrentPage("info");
          }}
          onClose={onClose}
        />
      )}

      {currentPage === "files" && (
        <StepFiles
          files={data.files}
          setData={setData}
          onBack={() => setCurrentPage("form")}
        />
      )}

      {currentPage === "info" && (
        <StepInfo
          data={data}
          onBack={() => setCurrentPage("form")}
          info={info}
        />
      )}
    </Box>
  );
};

export default TicketAddFormMobile;
