import React, { useRef } from "react"
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
    configPages,
  } = useSearch();
  const ref = useRef(null);
  const handleSearch = () => {
    document.querySelector(".navmenu").classList.add("active-search");
    document.querySelector(".input-search").classList.add("active-search");
    ref.current.focus();
  };

  const handleOnBlur = () => {
    document.querySelector(".navmenu").classList.remove("active-search");
    document.querySelector(".input-search").classList.remove("active-search");
  };

  return (
    <div>
      <div role="button" onClick={handleSearch}>
        <input
          type="text"
          placeholder="Buscar producto..."
          name="search"
          id="search"
          ref={ref}
          onChange={(e) => getProductsSearch(e.target.value)}
          value={findFilter}
          onBlur={handleOnBlur}
        ></input>
      </div>
      {isSearching ? (
        <div className={Styles.searchFinderBackdrop}>
          <div className={Styles.dropFinder} onClick={onClickOutside}></div>

          <div className={Styles.finderSearch}>
            <ul>
              {listProducts.length > 0 && loadingProducts === false ? (
                listProducts?.map((product) => (
                  <div>
                    <li key={product.item.code}>
                      <div className={Styles.productContainer}>
                        <div>
                          <img
                            width={80}
                            heigh={80}
                            src={product.item.imagen}
                            onError={(e) => {
                              e.target.src =
                                configPages.images.no_found_product;
                            }}
                          />
                        </div>
                        <div>
                          <p>{product.item.title}</p>
                          <p>Código: {product.item.code}</p>
                          {product.item.countSuggested ? (
                            <div>
                              Cantidad Sugerida : {product.item.countSuggested}
                            </div>
                          ) : null}
                          <b>
                            {" $" +
                              new Intl.NumberFormat("en", {
                                numberingSystem: "latn",
                                style: "decimal",
                                currency: "COP",
                              }).format(
                                parseFloat(product.item.tax) > 0
                                  ? Math.round(
                                      (parseFloat(product.item.price) *
                                        parseFloat(product.item.tax)) /
                                        100 +
                                        parseFloat(product.item.price)
                                    )
                                  : product.item.price
                              ) +
                              (product.item.units === "GR" ? " x Gramo" : "")}
                          </b>
                        </div>
                        <div>
                          <div>
                            <div>
                              <button> - </button>
                            </div>
                            <div>
                              <input type="number" />
                            </div>
                            <button> + </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  </div>
                ))
              ) : (
                <p>Buscando ...</p>
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default SearchBar;
