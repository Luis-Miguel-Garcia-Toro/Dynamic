import imageUserDefault from "@/assets/img/user.png";
import {
  Button,
  ImageLazy,
} from "../../../../../../../common/presentation/components";

import { FaStoreAlt } from "react-icons/fa";
import { icons } from "../../../../../../../common/presentation/utils";
import Styles from "./scss/profile.module.scss";

const user = {
  name: "I.R.C.C LA SABANA",
  email: "Jp0pG@example.com",
  cel: "123456789",
  phone: "123456789",
};

const branch = {
  social_reason: "C.C LA SABANA",
  code: "123456789",
  email: "",
  delivery_frequency: "LU-MA-MI-JU-VI-SA",
  route: "V012",
};

export const Profile = () => {
  return (
    <main className={Styles.Profile}>
      <section className={Styles.ProfileContainer}>
        <figure>
          <ImageLazy imageUri={imageUserDefault} />
        </figure>

        <div className={Styles.ProfileContent}>
          {Object.keys(user).map((key) => {
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
                <span>{user[key]}</span>
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
            <span>{branch.social_reason}</span>
          </p>
          <p>
            <span>Código secuencia</span>
            <span>{branch.code}</span>
          </p>
          <p>
            <span>Correo PDV</span>
            <span></span>
          </p>
          <p>
            <span>Frecuencia de entrega</span>
            <span>{branch.delivery_frequency}</span>
          </p>
          <p>
            <span>Ruta</span>
            <span>{branch.route}</span>
          </p>
        </div>
      </section>
    </main>
  );
};
