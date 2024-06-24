import PropTypes from "prop-types"
import { ToastContainer } from "react-toastify"
import { cartProductUiTypes } from "../../../../../../common/domain"
import { CardProduct } from "../card-product/CardProduct"
import Styles from "./scss/product-list.module.scss"

export const ProductList = ({ products, typeCards }) => {
  return (
    <div className={Styles.ProductListContainer}>
      <div className={Styles.ProductListContent}>
        <h4 className="title fadeIn">Elige tus productos</h4>
        <div className={`${Styles.ProductList} ${Styles[typeCards]}`}>
          {products.map((product, index) => (
            <CardProduct
              sizeCardRow="small"
              key={`${product.code}-${index}`}
              product={product}
              type={typeCards}
            />
          ))}
        </div>
      </div>

      <ToastContainer position='bottom-right' />
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  typeCards: PropTypes.oneOf(cartProductUiTypes),
};

ProductList.defaultProps = {
  typeCards: "vertical",
};
