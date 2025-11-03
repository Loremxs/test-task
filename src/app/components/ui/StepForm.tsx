import SelectField from "../common/form/SelectField";
import TextAreaField from "../common/form/TextAreaField";
import CheckboxField from "../common/form/CheckboxField";
import { useCallback } from "react";
import { useOptions } from "@/app/hooks/useOptions";
import { usePharmaciesOptions } from "@/app/hooks/usePharmaciesOptions";
import {
  HStack,
  Badge,
  Flex,
  Box,
  VStack,
  Button,
  Circle,
  Text,
} from "@chakra-ui/react";
import { useTicketsStore } from "@/app/store/useTicketsStore";
import type { CategoryKey, CategoryInfo } from "@/app/types/common";
import { categoryInfoByType } from "@/app/constants/categoryCard";
import { CiFolderOn } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import HeaderModalMobile from "./HeaderModalMobile";
import { usePharmacySelectedValue } from "@/app/hooks/usePharmaciesSelectedValue";
import { usePrioritySelectedValue } from "@/app/hooks/usePrioritySelectedValue";
import type { TicketFormBaseProps } from "@/app/types/forms";
import type { HandleChangeFn } from "@/app/types/forms";

type StepFormProps = TicketFormBaseProps & {
  onShowInfo?: (info: CategoryInfo) => void;
  onAttachFiles?: () => void;
};

const StepForm = ({
  onClose,
  data,
  setData,
  initialData,
  onShowInfo,
  onAttachFiles,
}: StepFormProps) => {
  const { tickets, priorities, prioritiesList, categoriesList } =
    useTicketsStore();

  const handleChange: HandleChangeFn = useCallback((key, value) => {
    setData((prev) => ({ ...prev, [key]: value }));
  }, []);

  const handleSubmit = () => {
    console.log("Создана заявка:", data);
    setData(initialData);
    onClose?.();
  };
  const getPharmacySelectedValue = usePharmacySelectedValue(tickets);
  const getPrioritySelectedValue = usePrioritySelectedValue(priorities);
  const prioritiesOptions = useOptions(prioritiesList);
  const categoriesOptions = useOptions(categoriesList);
  const pharmaciesOptions = usePharmaciesOptions(tickets);

  const indicator = (
    <Badge variant="outline" size="md">
      Изменить
    </Badge>
  );

  const info =
    data.category.length > 0
      ? categoryInfoByType[data.category[0] as CategoryKey]
      : undefined;
  const attachedFiles = data?.files?.length ?? 0;
  const isSelectedCategory = data?.category?.length || undefined;

  return (
    <>
      <HeaderModalMobile title="Создание заявки" onClose={onClose} />
      <Box mt={1} px={3} pb={"100px"}>
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
                ? getPharmacySelectedValue(data.pharmacy[0])
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
                <HStack
                  as="button"
                  onClick={() => onShowInfo?.(info!)}
                  gap={1}
                  color="#440AF1"
                  cursor="pointer"
                >
                  <BsQuestionCircle size={14} />
                  <Text fontSize="sm" fontWeight="medium">
                    Проверьте себя
                  </Text>
                </HStack>
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
