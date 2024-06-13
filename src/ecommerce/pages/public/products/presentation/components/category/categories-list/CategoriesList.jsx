import { useEffect, useState } from "react";
import Styles from "./scss/categories-list.module.scss";
import AuthCategories from "../../../../../../../auth/categories/AuthCategories"

export const CategoriesList = () => {
  const [listCategories, setListCategories] = useState([]);

  const getCategoriesList = async () => {
    try {
      let result = await AuthCategories();
      setListCategories(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoriesList();
  },[])

  return (
    <div className={`${Styles.CategoriesListContainer} fadeIn`}>
      <div className={Styles.CategoriesListContent}>
        <h2 className="title">Categorías</h2>
        <div className={Styles.CategoriesGrid}>
          {(listCategories || []).map((category) => (
            <div className={`${Styles.CategoriesItem} fadeIn`} key={category.descripcion}>
              <figure>
                <img src='https://www.svgrepo.com/show/355481/milk.svg' alt={`Ir a la categoría ${category.descripcion}`} />
              </figure>
              <span>{category.descripcion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
