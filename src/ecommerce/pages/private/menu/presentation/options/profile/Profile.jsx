import imageUserDefault from "@/assets/img/user.png";
import {
  Button,
  ImageLazy,
} from "../../../../../../../common/presentation/components";

import { useMemo } from "react";
import { FaStoreAlt } from "react-icons/fa";
import { useAppStore } from "../../../../../../../common/infrastructure/store/app.store";
import { icons } from "../../../../../../../common/presentation/utils";
import Styles from "./scss/profile.module.scss";

export const Profile = () => {
  const { user } = useAppStore();
  const userDataToShow = useMemo(() => {
    return {
      name: user.name,
      email: user.email || "-",
      cel: user.phone,
      phone: "01 8000 110000", //TODO: Ver de donde obtener este dato
    };
  }, [user]);

  return (
    <main className={Styles.Profile}>
      <section className={Styles.ProfileContainer}>
        <figure>
          <ImageLazy imageUri={imageUserDefault} />
        </figure>

        <div className={Styles.ProfileContent}>
          {Object.keys(userDataToShow).map((key) => {
            const mainKey = "name";
            const isMainKey = key === mainKey;

            return (
              <p
                className={`${Styles.ProfileItem} ${
                  isMainKey ? Styles.ProfileItem_Main : ""
                }`}
                key={key}
              >
                {!isMainKey && <>{icons.getIcons(key)}</>}
                <span>{userDataToShow[key]}</span>
              </p>
            );
          })}
        </div>

        <Button label="Cambiar contraseña" />
      </section>

      <section className={Styles.ProfileBranch}>
        <FaStoreAlt />
        <div className={Styles.ProfileBranchContent}>
          <p>
            <span>Razón social</span>
            <span>{user.business_name}</span>
          </p>
          <p>
            <span>Código secuencia</span>
            <span>{user.code}</span>
          </p>
          <p>
            <span>Correo PDV</span>
            <span></span>
          </p>
          <p>
            <span>Frecuencia de entrega</span>
            <span>{user.frequent}</span>
          </p>
          <p>
            <span>Ruta</span>
            <span>{user.delivery_route}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
