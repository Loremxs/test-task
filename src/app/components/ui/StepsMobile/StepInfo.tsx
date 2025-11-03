import { VStack } from "@chakra-ui/react";
import InfoBlock from "../Ticket/InfoBlock";
import HeaderModalMobile from "../Mobile/HeaderModalMobile";
import React from "react";
import type { InfoData } from "@/app/types/common";
type StepInfoProps = {
  info?: InfoData;
  onBack: () => void;
};

const StepInfo: React.FC<StepInfoProps> = ({ info, onBack }) => {
  return (
    info && (
      <>
        <HeaderModalMobile title="Проверьте себя" onClose={onBack} />
        <VStack align="start" flexWrap="wrap" my={3} mx={4}>
          <InfoBlock
            type="warning"
            title={info.warning.title}
            list={info.warning.list}
          />
          <InfoBlock
            type="danger"
            title={info.danger.title}
            list={info.danger.list}
          />
        </VStack>
      </>
    )
  );
};

export default StepInfo;
