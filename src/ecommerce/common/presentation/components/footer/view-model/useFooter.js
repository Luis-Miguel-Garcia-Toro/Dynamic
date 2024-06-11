import { useMemo } from "react";
import { useEcommerceStore } from "../../../../infrastructure/store";

export const useFooter = () => {
  const { configPages } = useEcommerceStore();
  const logo = configPages?.images?.icon;
  const menuPolicies = configPages?.menu_policies || [];
  const socialMedia = configPages?.social_network || [];

  const clientServiceData = useMemo(() => {
    const clientService = configPages?.client_service || [];
    const obj = {};
    for (const item of clientService) {
      if (obj[item.title]) {
        obj[item.title].push(item.description);
      } else {
        obj[item.title] = [item.description];
      }
    }

    return obj;
  }, [configPages]);

  return {
    clientServiceData,
    logo,
    menuPolicies,
    socialMedia,
  };
};
