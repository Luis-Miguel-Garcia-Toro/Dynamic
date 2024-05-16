import { IoIosMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Styles from "./scss/sidebar-categories.module.scss";
import { useSidebarCategories } from "./view-model/useSidebarCategories";

export const SidebarCategories = () => {
  const { categories, onToggleMenu, showMenu } = useSidebarCategories();

  return (
    <aside className={Styles.SidebarCategoriesContainer}>
      <div className={Styles.SidebarButtonContainer}>
        <button onClick={onToggleMenu} className={Styles.SidebarMenuButton}>
          <IoIosMenu size={20} />
          <span>Categorías</span>
        </button>
      </div>

      <nav className={`${Styles.SidebarMenu} ${showMenu ? Styles.Show : ""}`}>
        <div className={Styles.CategoriesHeader}>
          <h2>Categorías</h2>
          <button onClick={onToggleMenu}>
            <IoCloseSharp size={30} color="var(--color-white)" />
          </button>
        </div>
        <div className={Styles.SidebarMenuContent}>
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
      </nav>
    </aside>
  );
};
