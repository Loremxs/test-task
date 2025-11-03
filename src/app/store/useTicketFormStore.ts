import { usePrioritiesStore } from "./usePrioritiesStore";
import { useCategoriesStore } from "./useCategoriesStore";
import { usePharmaciesStore } from "./usePharmaciesStore";
export const useTicketFormStore = () => {
  const { loadPrioritiesMockData } = usePrioritiesStore();
  const { loadCategoriesMockData } = useCategoriesStore();
  const { loadPharmaciesMockData } = usePharmaciesStore();

  const loadFormData = async () => {
    await Promise.all([
      loadPrioritiesMockData(),
      loadCategoriesMockData(),
      loadPharmaciesMockData(),
    ]);
  };

  return { loadFormData };
};
