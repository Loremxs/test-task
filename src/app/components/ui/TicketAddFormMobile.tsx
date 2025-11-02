import { useState } from "react";
import { Box } from "@chakra-ui/react";
import StepForm from "./StepForm";
import StepFiles from "./StepFile";
import StepInfo from "./StepInfo";
const TicketAddFormMobile = ({ onClose, data, setData, initialData }) => {
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
