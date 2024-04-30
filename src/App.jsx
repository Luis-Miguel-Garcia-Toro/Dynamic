import "./common/presentation/scss/index.scss";
import { EcommerceRoutes } from "./ecommerce/routes";

const CURRENT_PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;

const projects = {
  ecommerce: <EcommerceRoutes />,
};

export const App = () => {
  return projects[CURRENT_PROJECT_NAME];
};
