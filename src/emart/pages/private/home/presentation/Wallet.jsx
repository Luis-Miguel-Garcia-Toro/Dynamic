import React, { useState } from "react";
import Styles from "./scss/home.module.scss";
import { useHomePage } from "./view-model";
import { BusinessCard } from "./components";
import {
  ButtonNavigate,
  ImageLazy,
  Loading,
} from "@/common/presentation/components";
import { BsBuildingCheck } from "react-icons/bs";

export const Wallet = () => {
  const { businessList, nit, onNavigateToBranch } = useHomePage();

  return (
    <main className={Styles.HomePageContainer}>
      <div className={Styles.HomeBackground} />

      <div className={Styles.HomePageHeader}>
        <ButtonNavigate
          color="var(--color-label)"
          navigateTo={() => window.history.back()}
          text="Regresar"
        />
        <br />
        <div className={`${Styles.HomePageHeaderOptions} fadeIn`}>
          <h1>Tu Wallet</h1>
        </div>
        <h2>Nit - {nit}</h2>
      </div>
      <section className={Styles.BusinessListContainer}>
        {businessList.map((business) => (
          <BusinessCard
            navigateTo={() => onNavigateToBranch(business)}
            business={business}
            key={business.business}
          />
        ))}
      </section>
      <section className={Styles.BranchListContainer}>
        <div className={`${Styles.BranchListTitle} fadeIn`}>
          <BsBuildingCheck size={20} color="var(--color-label)" />
          <h2>Sucursales</h2>
        </div>
      </section>
    </main>
  );
};

export default Wallet;
