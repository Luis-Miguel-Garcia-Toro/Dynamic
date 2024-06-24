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
            <div className={`${Styles.CategoriesItem} fadeIn`} key={category.descripcion} onClick={() => window.location.href = 'products?category=' + category.code}>
              <figure>
                <img src={category.img == null ? 'https://www.svgrepo.com/show/355481/milk.svg' : category.img} />
              </figure>
              <span>{category.descripcion}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
