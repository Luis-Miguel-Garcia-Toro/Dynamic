import {
  InputField,
  Loading,
} from "../../../../../common/presentation/components"
import { CardSearch} from "../../../../pages/public/products/presentation/components"
import Styles from "./scss/search.module.scss"
import { useSearch } from "./view-model/useSearch"

const SearchBar = () => {
  const {
    getProductsSearch,
    listProducts,
    loadingProducts,
    isSearching,
    findFilter,
    onClickOutside,
  } = useSearch();

  return (
    <div>
      {/* <div onClick={handleSearch}> */}

      <InputField
        inputAutocomplete={false}
        className={Styles.InputSearch}
        placeholder="Buscar producto..."
        name="search"
        onChange={(value) => getProductsSearch(value)}
        value={findFilter}
      />

      {isSearching && (
        <div className={Styles.searchFinderBackdrop}>
          <div className={Styles.dropFinder} onClick={onClickOutside}></div>

          <div className={Styles.finderSearch}>
            {listProducts.length > 0 &&
              loadingProducts === false &&
              listProducts?.map((product, index) => (
                <div
                  className={Styles.ProductItem}
                  key={`${product.code}-${index}`}
                >
                  <CardSearch
                    sizeCardRow="small"
                    type="horizontal"
                    product={product}
                  />
                </div>
              ))}

            {loadingProducts && (
              <div>
                <Loading />
              </div>
            )}

            {!loadingProducts && listProducts.length === 0 && (
              <div className={Styles.ProductNotFound}>
                <p>No se encontraron resultados!</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
