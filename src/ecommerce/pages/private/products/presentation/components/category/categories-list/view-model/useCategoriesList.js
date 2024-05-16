import { useAppStore } from "@/common/infrastructure/store";

export const useCategoriesList = () => {
  const configPage = useAppStore((state) => state.configPages);
  const { categories = {} } = configPage;

  return {
    categories,
  };
};
