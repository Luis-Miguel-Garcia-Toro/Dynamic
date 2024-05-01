import "./common/presentation/scss/index.scss";
import { EcommerceRoutes } from "./ecommerce/routes";
import { EmartRoutes } from "./emart/routes";

const CURRENT_PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;

const projects = {
  ecommerce: <EcommerceRoutes />,
  emart: <EmartRoutes />,
};

export const App = () => {
  return (
    projects[CURRENT_PROJECT_NAME] || (
      <h3>
        Project Not Found, configure PROJECT NAME in the environments variables,
        check .env.template file
      </h3>
    )
  );
};
