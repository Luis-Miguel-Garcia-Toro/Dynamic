import Styles from "./scss/categories-list.module.scss";
import { useCategoriesList } from "./view-model/useCategoriesList";

export const CategoriesList = () => {
  const { categories } = useCategoriesList();

  return (
    <div className={Styles.CategoriesListContainer}>
      <div className={Styles.CategoriesListContent}>
        <h2>Categorías</h2>
        <div className={Styles.CategoriesGrid}>
          {(categories?.categoriesList || []).map((category) => (
            <div className={Styles.CategoriesItem} key={category.name}>
              <figure>
                <img src={category.icon} alt={category.name} />
              </figure>
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
