import SelectField from "../common/form/SelectField";
import TextAreaField from "../common/form/TextAreaField";
import CheckboxField from "../common/form/CheckboxField";
import InfoBadge from "./InfoBadge";
import { useCallback } from "react";
import { useOptions } from "@/app/hooks/useOptions";
import { usePharmaciesOptions } from "@/app/hooks/usePharmaciesOptions";
import {
  HStack,
  Text,
  Badge,
  Flex,
  Box,
  VStack,
  Button,
  Circle,
} from "@chakra-ui/react";
import PriorityInfo from "./PriorityInfo";
import { useTicketsStore } from "@/app/useTicketsStore";
import { categoryInfoByType } from "@/app/constants/categoryCard";
import { CiFolderOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import HeaderModalMobile from "./HeaderModalMobile";

const StepForm = ({
  onClose,
  data,
  setData,
  initialData,
  onShowInfo,
  onAttachFiles,
}) => {
  const { tickets, priorities, prioritiesList, categoriesList } =
    useTicketsStore();

  const handleChange = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = () => {
    console.log("Создана заявка:", data);
    setData(initialData);
    onClose?.();
  };

  const getPharmacySelectedValue = (pharmacyId, tickets) => {
    const pharmacy = tickets.find((t) => t.id === Number(pharmacyId));
    if (!pharmacy) return null;
    return (
      <HStack>
        <InfoBadge info={pharmacy.pharmacyCode} />
        <Text>{pharmacy.pharmacyName}</Text>
      </HStack>
    );
  };

  const getPrioritySelectedValue = (id) => {
    const priority = priorities[id];
    if (!priority) return null;
    return <PriorityInfo priority={priority} showAdditionalInfo />;
  };

  const prioritiesOptions = useOptions(prioritiesList);
  const categoriesOptions = useOptions(categoriesList);
  const pharmaciesOptions = usePharmaciesOptions(tickets);

  const indicator = (
    <Badge variant="outline" size="md">
      Изменить
    </Badge>
  );

  const info =
    data.category.length > 0 ? categoryInfoByType[data.category[0]] : undefined;
  const attachedFiles = data?.files?.length || null;
  const isSelectedCategory = data?.category?.length || null;

  return (
    <>
      <HeaderModalMobile title="Создание заявки" onClose={onClose} />
      <Box mt={1} px={3}>
        <Flex direction="column" gap={6}>
          <SelectField
            label="Аптека"
            placeholder="Выберите аптеку от которой исходит заявка"
            options={pharmaciesOptions}
            value={data.pharmacy}
            onChange={(value) => handleChange("pharmacy", value)}
            size="md"
            CustomSelectedValue={
              data.pharmacy[0]
                ? getPharmacySelectedValue(data.pharmacy[0], tickets)
                : null
            }
            CustomIndicator={data.pharmacy[0] ? <div>{indicator}</div> : null}
          />

          <VStack gap={3} align="stretch">
            <SelectField
              label="Категория заявки"
              placeholder="Холодильники, кондиционеры или другое"
              options={categoriesOptions}
              value={data.category}
              size="md"
              onChange={(value) => handleChange("category", value)}
            />
            <HStack align="center" justify="space-between">
              <CheckboxField
                label="Гарантийный случай?"
                value={data.guarantee}
                onChange={(value) => handleChange("guarantee", value)}
              />
              {isSelectedCategory && (
                <Button
                  onClick={() => onShowInfo(info)}
                  variant="plain"
                  fontWeight="medium"
                  color="#440AF1"
                  fontSize="12px"
                  size={"sm"}
                >
                  <BsQuestionCircle />
                  Проверьте себя
                </Button>
              )}
            </HStack>
          </VStack>

          <TextAreaField
            label="Тема заявки"
            placeholder="Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
            value={data.topic}
            onChange={(value) => handleChange("topic", value)}
            rows={3}
          />

          <SelectField
            label="Приоритет"
            options={prioritiesOptions}
            value={data.priority}
            onChange={(value) => handleChange("priority", value)}
            CustomSelectedValue={
              data.priority[0]
                ? getPrioritySelectedValue(data.priority[0])
                : null
            }
          />
          <TextAreaField
            value={data.description}
            onChange={(value) => handleChange("description", value)}
            label="Описание проблемы"
            placeholder={`Кратко опишите проблему:\n\n• что случилось?\n• дата и время произошедшего?\n• сколько длится проблема?\n• насколько она влияет на вашу работу?`}
            rows={6}
          />
          <Box position="fixed" bottom={0} left={0} right={0} p={3}>
            <VStack gap={2} mt={2}>
              {attachedFiles > 0 ? (
                <Button onClick={onAttachFiles} w="full" variant="subtle">
                  <CiFolderOn />
                  Прикрепленые файлы:
                  <Circle bg="white" size="12px" outlineColor="bg">
                    {attachedFiles}
                  </Circle>
                </Button>
              ) : (
                <Button onClick={onAttachFiles} w="full" variant="subtle">
                  <FiPlus />
                  Прикрепить файлы
                </Button>
              )}
              <Button onClick={handleSubmit} w={"full"}>
                Создать заявку
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default StepForm;
