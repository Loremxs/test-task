import SelectField from "../common/form/SelectField";
import TextAreaField from "../common/form/TextAreaField";
import CheckboxField from "../common/form/CheckboxField";
import UploadFileField from "../common/form/UploadFileField";
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
} from "@chakra-ui/react";
import PriorityInfo from "./PriorityInfo";
import InfoBlock from "./InfoBlock";
import { categoryInfoByType } from "@/app/constants/categoryCard";
import { useTicketsStore } from "@/app/useTicketsStore";
import type { TicketAddFormDesktopProps } from "@/app/types/forms";

const TicketAddFormDesktop = ({ onClose, data, setData, initialData }) => {
  const { tickets, priorities, prioritiesList, categoriesList } =
    useTicketsStore();
  const handleChange = useCallback((key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  }, []);
  const handleSubmit = () => {
    console.log("Создана заявка:", data);
    setData(initialData);
    if (onClose) onClose();
  };

  const handleCancel = () => {
    setData(initialData);
    if (onClose) onClose();
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
  }; // custom hook
  const getPrioritySelectedValue = (id) => {
    const priority = priorities[id];
    if (!priority) return null;
    return <PriorityInfo priority={priority} showAdditionalInfo />;
  }; // custom hook
  const prioritiesOptions = useOptions(prioritiesList);
  const categoriesOptions = useOptions(categoriesList);
  const pharmaciesOptions = usePharmaciesOptions(tickets);
  const indicator = (
    <Badge variant="outline" size={"md"}>
      Изменить
    </Badge>
  );
  const info =
    data.category.length > 0 ? categoryInfoByType[data.category[0]] : undefined;
  return (
    <Box mt={2}>
      <Flex direction={{ base: "column", md: "row" }} gap={8} align="start">
        <VStack align="stretch" gap={11} flex="1">
          <SelectField
            label={"Аптека"}
            placeholder={"Выберите аптеку от которой исходит заявка"}
            options={pharmaciesOptions}
            value={data.pharmacy}
            onChange={(value) => handleChange("pharmacy", value)}
            size={"lg"}
            CustomSelectedValue={
              data.pharmacy[0]
                ? getPharmacySelectedValue(data.pharmacy[0], tickets)
                : null
            }
            CustomIndicator={data.pharmacy[0] ? <div>{indicator}</div> : null}
          />
          <VStack gap={4} align="stretch">
            <SelectField
              label={"Категория заявки"}
              placeholder={"Холодильники, кондиционеры или другое}"}
              options={categoriesOptions}
              value={data.category}
              size={"md"}
              onChange={(value) => handleChange("category", value)}
            />
            <CheckboxField
              label={"Гарантийный случай?"}
              value={data.guarantee}
              onChange={(value) => handleChange("guarantee", value)}
            />
            {info && (
              <HStack align="start" flexWrap="wrap">
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
              </HStack>
            )}
          </VStack>
        </VStack>
        <VStack align="stretch" gap={4} flex="1">
          <TextAreaField
            label={"Тема заявки"}
            placeholder={
              "Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
            }
            value={data.topic}
            onChange={(value) => handleChange("topic", value)}
            rows={3}
          />
          <SelectField
            label={"Приоритет"}
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
            label={"Описание проблемы"}
            placeholder={`Кратко опишите проблему:\n \n• что случилось?\n• дата и время произошедшего?\n• сколько длится проблема?\n• насколько она влияет на вашу работу? `}
            rows={7}
          />
          <UploadFileField
            label={"Прикрепите файлы"}
            placeholder={"Выберите или перетащите фото или файлы"}
            value={data.files}
            onChange={(value) => handleChange("files", value)}
          />
        </VStack>
      </Flex>
      <HStack>
        <Button onClick={handleSubmit}>Создать заявку</Button>
        <Button variant="outline" onClick={handleCancel}>
          Отмена
        </Button>
      </HStack>
    </Box>
  );
};

export default TicketAddFormDesktop;
