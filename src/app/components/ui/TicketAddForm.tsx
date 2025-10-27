import SelectField from "../common/form/SelectField";
import TextAreaField from "../common/form/TextAreaField";
import InputField from "../common/form/InputField";
import CheckboxField from "../common/form/CheckboxField";
import UploadFileField from "../common/form/UploadFileField";
import PharmacyCode from "./PharmacyCode";
import { priorities } from "@/app/api/priorities";
import { useCallback, useState, useEffect } from "react";
import { usePrioritiesOptions } from "@/app/hooks/usePrioritiesOprions";
import { useCategoriesOptions } from "@/app/hooks/useCategoriesOptions";
import { prioritiesById } from "@/app/api/priorities";
import { categories } from "@/app/api/categories";
import { usePharmaciesOptions } from "@/app/hooks/usePharmaciesOptions";
import { HStack, Text, Badge } from "@chakra-ui/react";
import Priority from "./Priority";
import InfoBlock from "./InfoBlock";
import { categoryInfoByType } from "@/app/constants/categoryCard";

const TicketAddForm = ({ tickets }) => {
  const [data, setData] = useState({
    pharmacy: [],
    category: [],
    guarantee: false,
    topic: "",
    priority: [],
    description: "",
    files: [],
  });
  const handleChange = useCallback((key, value) => {
    setData((prevState) => {
      return { ...prevState, [key]: value };
    });
  }, []);

  const getPharmacySelectedValue = (pharmacyId, tickets) => {
    const pharmacy = tickets.find((t) => t.id === Number(pharmacyId));
    if (!pharmacy) return null;

    return (
      <HStack spacing={2}>
        <PharmacyCode pharmacyCode={pharmacy.pharmacyCode} />
        <Text>{pharmacy.pharmacyName}</Text>
      </HStack>
    );
  }; // custom hook

  const getPrioritySelectedValue = (id) => {
    const priority = prioritiesById[id];
    if (!priority) return null;
    return <Priority priority={priority} />;
  }; // custom hook

  const prioritiesOptions = usePrioritiesOptions(priorities);
  const categoriesOptions = useCategoriesOptions(categories);
  const pharmaciesOptions = usePharmaciesOptions(tickets);
  const indicator = <Badge variant="outline"> Изменить</Badge>;
  const info =
    data.category.length > 0 ? categoryInfoByType[data.category[0]] : undefined;
  useEffect(() => {
    console.log("Form data:", data);
  }, [data]);

  return (
    <>
      <SelectField
        label={"Аптека"}
        placeholder={"Выберите аптеку от которой исходит заявка"}
        options={pharmaciesOptions}
        value={data.pharmacy}
        onChange={(value) => handleChange("pharmacy", value)}
        CustomSelectedValue={
          data.pharmacy[0]
            ? getPharmacySelectedValue(data.pharmacy[0], tickets)
            : null
        }
        CustomIndicator={data.pharmacy[0] ? <div>{indicator}</div> : null}
      />
      <SelectField
        label={"Категория заявки"}
        placeholder={"Холодильники, кондиционеры или другое}"}
        options={categoriesOptions}
        value={data.category}
        onChange={(value) => handleChange("category", value)}
      />
      <CheckboxField
        label={"Гарантийный случай?"}
        value={data.guarantee}
        onChange={(value) => handleChange("guarantee", value)}
      />
      <HStack align="start" spacing={4} mt={2}>
        {info && (
          <HStack align="start" spacing={4} mt={2}>
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
      </HStack>
      <InputField
        label={"Тема заявки"}
        placeholder={
          "Дайте заявке краткое название: например, сломался холодильник или не работает кондиционер"
        }
        boxContent={"Выберите или перетащите фото или файл"}
        value={data.topic}
        onChange={(value) => handleChange("topic", value)}
      />
      <SelectField
        label={"Приоритет"}
        placeholder={123}
        options={prioritiesOptions}
        value={data.priority}
        onChange={(value) => handleChange("priority", value)}
        CustomSelectedValue={
          data.priority[0] ? getPrioritySelectedValue(data.priority[0]) : null
        }
      />
      <TextAreaField
        value={data.description}
        onChange={(value) => handleChange("description", value)}
        label={"Описание проблемы"}
        placeholder={`Кратко опишите проблему:\n \n• что случилось?\n• дата и время произошедшего?\n• сколько длится проблема?\n• насколько она влияет на вашу работу? `}
      />
      <UploadFileField
        label={"Прикрепите файлы"}
        placeholder={"Выберите или перетащите фото или файлы"}
        value={data.files}
        onChange={(value) => handleChange("files", value)}
      />
    </>
  );
};

export default TicketAddForm;
