import { IoClose } from "react-icons/io5";
import { MdCategory } from "react-icons/md";
import Styles from "./scss/sidebar-categories.module.scss";
import { useSidebarCategories } from "./view-model/useSidebarCategories";

export const SidebarCategories = () => {
  const { categories, onToggleMenu, showMenu, headerHeight } =
    useSidebarCategories();

  return (
    <aside className={Styles.SidebarCategoriesContainer}>
      <div className={`${Styles.SidebarButtonContainer} fadeIn`}>
        <button onClick={onToggleMenu} className={Styles.SidebarMenuButton}>
          {showMenu ? <IoClose size={20} /> : <MdCategory size={20} />}
          <span>Categorías</span>
        </button>
      </div>

      <nav
        style={{
          paddingTop: `${headerHeight}px`,
        }}
        className={`${Styles.SidebarMenu} fadeIn ${
          showMenu ? Styles.Show : ""
        }`}
      >
        <div className={Styles.SidebarMenuContent}>
          <div className={Styles.CategoriesGrid}>
            {(categories?.categoriesList || []).map((category) => (
              <div className={Styles.CategoriesItem} key={category.name}>
                <figure>
                  <img
                    src={category.icon}
                    alt={`Ir a la categoría ${category.name}`}
                  />
                </figure>
                <span>{category.name}</span>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </aside>
  );
};
