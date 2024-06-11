import { useEcommerceStore } from "../../../../../../../../common/infrastructure/store";

export const useCategoriesList = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const { categories = {} } = configPage;

  return {
    categories,
  };
};
