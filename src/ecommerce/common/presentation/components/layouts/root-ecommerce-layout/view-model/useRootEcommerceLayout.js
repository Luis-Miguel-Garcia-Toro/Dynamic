import { useQuery } from "@tanstack/react-query"
import { useCallback, useEffect } from "react"
import { useEcommerceStore } from "../../../../../infrastructure/store"
import { fetchGetConfigPage } from "../../infrastructure/config-page-repository"

export const useRootEcommerceLayout = () => {
  const updateConfigPage = useEcommerceStore((state) => state.updateConfigPage);

  const setVarCss = (configPage) => {
    const root = document.querySelector(":root");
    const { theme, images } = configPage;
    root.style.setProperty("--color-primary", theme.primary_color);
    root.style.setProperty("--color-secondary", theme.primary_button);
    root.style.setProperty("--color-text", theme.text_color);
    root.style.setProperty(
      "--login-background-image",
      `url(${images.start_page})`
    );
  };

  const configPageQuery = useQuery({
    queryKey: ["configPage"],
    queryFn: () => fetchGetConfigPage(),
    refetchOnWindowFocus: false,
  });

  const saveConfigPageToStore = useCallback(() => {
    if (configPageQuery.data) {
      updateConfigPage({
        ...configPageQuery.data,
        auth_method: "user_password_code", //TODO: Eliminar
        categories: {
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
      });
      setVarCss(configPageQuery.data);
    }
  }, [configPageQuery.data, updateConfigPage]);

  useEffect(() => {
    saveConfigPageToStore();
  }, [saveConfigPageToStore]);

  return {
    isLoadingConfigPage: configPageQuery.isLoading,
    isErrorConfigPage: configPageQuery.isError,
  };
};
