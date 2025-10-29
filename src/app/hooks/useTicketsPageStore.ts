import { useTicketsStore } from "../useTicketsStore";
import { usePrioritiesStore } from "../usePrioritiesStore";
import { useCategoriesStore } from "../useCategoriesStore";

export const useTicketsPageStore = () => {
  const { loadTicketsMockData } = useTicketsStore();
  const { loadPrioritiesMockData } = usePrioritiesStore();
  const { loadCategoriesMockData } = useCategoriesStore();

  const loadAll = async () => {
    await Promise.all([
      loadPrioritiesMockData(),
      loadCategoriesMockData(),
      loadTicketsMockData(),
    ]);
  };

  return { loadAll };
};
