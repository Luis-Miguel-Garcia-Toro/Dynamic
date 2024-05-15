import { useUIStore } from "../../../../../../../common/infrastructure/store/ui.store";

export const useCategoriesList = () => {
  const configPage = useUIStore((state) => state.configPages);
  const { categories = {} } = configPage;

  return {
    categories,
  };
};
