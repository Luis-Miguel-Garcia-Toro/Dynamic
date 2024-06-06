import {
  authenticationMethods,
  uiLoginType,
} from "@ecommerce/common/domain/ui/ui.types";
import { useCallback } from "react";
import { useAppStore } from "../../../../../../../common/infrastructure/store";
import {
  bannerStyle,
  cartModeTypes,
  cartProductUiTypes,
  categoryStyle,
} from "../../../../../domain";

const defaultConfigPage = {
  auth: {
    login: {
      uiType: uiLoginType.IMAGE_LEFT,
      authMethod: authenticationMethods.USER_PASSWORD,
      logo: "https://www.celuweb.com/wp-content/uploads/2020/04/logo_celuweb.png",
      backgroundImage:
        "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress",
      codeValidationLength: 6,
    },
  },
  products: {
    typeCard: cartProductUiTypes[0],
  },
  categories: {
    categoriesStyle: categoryStyle.LIST,
    categoriesList: [
      {
        name: "Leches",
        icon: "https://www.svgrepo.com/show/355481/milk.svg",
      },
      {
        name: "Cremas",
        icon: "https://www.svgrepo.com/show/285051/cream-skin.svg",
      },
      {
        name: "Esparcibles",
        icon: "https://www.svgrepo.com/show/195139/spoon.svg",
      },
      {
        name: "Quesos",
        icon: "https://www.svgrepo.com/show/164619/cheese.svg",
      },
      {
        name: "Yogurt y bebidas",
        icon: "https://www.svgrepo.com/show/295426/curd.svg",
      },
      {
        name: "Jugos",
        icon: "https://www.svgrepo.com/show/28071/juice.svg",
      },
    ],
  },
  banner: {
    style: bannerStyle.BASIC,
  },
  cart: {
    mode: cartModeTypes.BAR,
  },
  menuOptions: [
    {
      url_redirect: "wallet",
      title: "Cartera",
      order: 1,
    },
    {
      url_redirect: "dashboard",
      title: "Dashboard",
      order: 2,
    },
    {
      url_redirect: "faq",
      title: "FAQ",
      order: 3,
    },
    {
      url_redirect: "help",
      title: "Ayuda",
      order: 4,
    },
    {
      url_redirect: "logout",
      title: "Cerrar sesión",
      order: 4,
    },
    {
      url_redirect: "orders",
      title: "Ordenes",
      order: 5,
    },
    {
      url_redirect: "profile",
      title: "Mi perfil",
      order: 6,
    },
  ],
};

export const useRootEcommerceLayout = () => {
  const updateConfigPage = useAppStore((state) => state.updateConfigPage);

  const updateConfigPageEcommerce = useCallback(() => {
    updateConfigPage(defaultConfigPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    updateConfigPageEcommerce,
  };
};
