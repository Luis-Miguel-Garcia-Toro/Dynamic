import { ButtonNavigate, ImageLazy, Loading } from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";
import { MdSearchOff } from "react-icons/md";
import { Navigate } from "react-router-dom";
import { BranchItem } from "./components";
import Styles from "./scss/branch-page.module.scss";
import { useBranchPage } from "./view-model";

export const BranchPage = () => {
  const { business, branchList, isLoadingBranches } = useBranchPage();

  if (!business) {
    return <Navigate to="/home" />;
  }

  return (
    <main className={Styles.BranchPageContainer}>
      {/* Business Info */}
      <section className={Styles.BranchInfoContainer}>
        <div className={Styles.BranchInfoButtonContainer}>
          <ButtonNavigate
            color="var(--color-label)"
            navigateTo={() => window.history.back()}
            text="Regresar al listado"
          />
        </div>

        <div className={`${Styles.BranchInfo} fadeIn`}>
          <figure>
            <ImageLazy imageUri={business.logo} />
          </figure>
          <div>
            <h1>{business.comercial_name}</h1>
            <span>{business.organization}</span>
          </div>
        </div>
      </section>

      {/* Branch List */}
      <section className={Styles.BranchListContainer}>
        <div className={`${Styles.BranchListTitle} fadeIn`}>
          <BsBuildingCheck size={20} color="var(--color-label)" />
          <h2>Sucursales</h2>
        </div>

        {isLoadingBranches && (
          <div>
            <Loading />
          </div>
        )}

        {!isLoadingBranches && branchList.length === 0 && (
          <div className={Styles.NoBranches}>
            <MdSearchOff color="var(--color-cancel)" size={50} />
            <h3>No se encontraron sucursales para este negocio</h3>
          </div>
        )}

        {!isLoadingBranches && (
          <div className={Styles.BranchList}>
            {branchList.map((branch) => (
              <BranchItem
                branch={branch}
                key={branch.code}
                colorBusiness={business.primary_color}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default BranchPage;
