import { VStack } from "@chakra-ui/react";
import InfoBlock from "./InfoBlock";
import HeaderModalMobile from "./HeaderModalMobile";
const StepInfo = ({ info, onBack }) => {
  return (
    info && (
      <VStack align="start" flexWrap="wrap">
        <HeaderModalMobile title={"Проверьте себя"} onClose={onBack} />
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
    )
  );
};

export default StepInfo;
