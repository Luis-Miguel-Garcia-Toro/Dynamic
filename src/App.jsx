import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import 'react-toastify/dist/ReactToastify.css';
import "./common/presentation/scss/index.scss";
import { EcommerceRoutes } from "./ecommerce/routes";
import { EmartRoutes } from "./emart/routes";

const CURRENT_PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME;
// const CURRENT_PROJECT_NAME = 'emart';

const projects = {
  ecommerce: <EcommerceRoutes />,
  emart: <EmartRoutes />,
};

const messageNotFound =
  "Project Not Found, configure PROJECT NAME in the environments variables, check .env.template file";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <>{projects[CURRENT_PROJECT_NAME] || <h3>{messageNotFound}</h3>}</>
    </QueryClientProvider>
  );
};
