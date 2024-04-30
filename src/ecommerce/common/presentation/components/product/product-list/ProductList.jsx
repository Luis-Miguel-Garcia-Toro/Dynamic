import PropTypes from "prop-types";
import { cartProductUiTypes } from "../../../../domain";
import { CardProduct } from "../card-product/CardProduct";
import Styles from "./scss/product-list.module.scss";

export const ProductList = ({ products, typeCards }) => {
  return (
    <div className={`${Styles.ProductList} ${Styles[typeCards]}`}>
      {products.map((product) => (
        <CardProduct key={product.id} product={product} type={typeCards} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      price: PropTypes.number,
      image: PropTypes.string,
    })
  ).isRequired,
  typeCards: PropTypes.oneOf(cartProductUiTypes),
};

ProductList.defaultProps = {
  typeCards: "vertical",
};
