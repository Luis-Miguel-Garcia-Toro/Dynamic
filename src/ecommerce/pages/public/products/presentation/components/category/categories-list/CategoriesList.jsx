import Styles from "./scss/categories-list.module.scss";
import { useCategoriesList } from "./view-model/useCategoriesList";

export const CategoriesList = () => {
  const { categories } = useCategoriesList();

  return (
    <div className={`${Styles.CategoriesListContainer} fadeIn`}>
      <div className={Styles.CategoriesListContent}>
        <h2 className="title">Categorías</h2>
        <div className={Styles.CategoriesGrid}>
          {(categories?.categoriesList || []).map((category) => (
            <div className={`${Styles.CategoriesItem} fadeIn`} key={category.name}>
              <figure>
                <img src={category.icon} alt={`Ir a la categoría ${category.name}`} />
              </figure>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
