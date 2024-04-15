import { create } from "zustand";
import { persist } from "zustand/middleware";
import { authenticationMethods, uiLoginType } from "./types";

const initialState = {
  configPages: {
    auth: {
      login: {
        uiType: uiLoginType.IMAGE_LEFT,
        authMethod: authenticationMethods.USER_PASSWORD,
        logo: "https://www.celuweb.com/wp-content/uploads/2020/04/logo_celuweb.png",
        backgroundImage: "https://images.pexels.com/photos/3648269/pexels-photo-3648269.jpeg?auto=compress",
        codeValidationLength: 6,
      },
    },
  },
  theme: {
    colors: {
      primary: "#3ca1ff",
      secondary: "#ffffff",
      text: "#132436",
    },
  },
};

export const useUIStore = create(
  persist(
    (set) => ({
      ...initialState,
      updateUI: (uiConfig) => set({ ...uiConfig }),
    }),
    { name: "uiStore" }
  )
);
