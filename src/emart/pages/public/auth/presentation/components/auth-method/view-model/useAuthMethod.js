import { useLoginEmartDataStore } from "@/emart/common/infrastructure/store"

export const useAuthMethod = () => {
  const { hasPassword, authMethodSelected } = useLoginEmartDataStore();

  return {
    authMethodSelected,
    hasPassword,
  };
};
