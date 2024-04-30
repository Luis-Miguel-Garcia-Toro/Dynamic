import "./common/presentation/scss/index.scss";
import { AppRoutes as AppEcommerceRoutes } from "./ecommerce/routes";

const CURRENT_PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;

const projects = {
  ecommerce: <AppEcommerceRoutes />,
};

export const App = () => {

  return projects[CURRENT_PROJECT_NAME];
};
