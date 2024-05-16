import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Styles from "./scss/header-categories.module.scss";
import { useHeaderCategories } from "./view-model/useHeaderCategories";

export const HeaderCategories = () => {
  const {
    containerRef,
    handleScroll,
    categories,
    showLeftArrow,
    showRightArrow,
  } = useHeaderCategories();

  return (
    <nav className={Styles.HeaderCategoriesContainer}>
      {showLeftArrow && (
        <button
          className={Styles.ArrowButton}
          onClick={() => handleScroll(-200)}
        >
          <IoIosArrowBack color="var(--color-primary)" />
        </button>
      )}
      <div className={Styles.CategoriesContainer} ref={containerRef}>
        <ul className={Styles.CategoriesList}>
          {(categories?.categoriesList || []).map((category) => (
            <li className={Styles.CategoriesListItem} key={category.name}>
              <figure>
                <img src={category.icon} alt={category.name} />
              </figure>
              {category.name}
            </li>
          ))}
        </ul>
      </div>
      {showRightArrow && (
        <button
          className={Styles.ArrowButton}
          onClick={() => handleScroll(200)}
        >
          <IoIosArrowForward color="var(--color-primary)" />
        </button>
      )}
    </nav>
  );
};
