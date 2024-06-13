import PropTypes from "prop-types";
import {
  Button,
  Counter,
} from "../../../../../../../common/presentation/components";
import { format } from "../../../../../../../common/presentation/utils";
import Styles from "./scss/product-description-basic.module.scss";
import { useProductDescriptionBasic } from "./view-model/useProductDescriptionBasic";

export const ProductDescriptionBasic = ({ product, layout }) => {
  const { goToCart, onAddProductToCart, onUpdateProductQuantity, quantity } =
    useProductDescriptionBasic({ product });

  const classNameLayout = `Layout-${layout}`;
console.log(product);
  return (
    <div className={Styles.ProductDescriptionContainer}>
      {layout === 2 && (
        <p className="fadeIn">
          <span className={Styles.ProductPrice}>
            {format.formatPrice(product.price)}
          </span>
          und.
        </p>
      )}
      <h1 className="fadeIn">{product.title}</h1>
      <p className={`${Styles.ProductDescription} fadeIn`}>
        {product.description}
      </p>

      <div
        className={`${Styles.ProductAddToCart} ${Styles[classNameLayout]} fadeIn`}
      >
        {layout === 1 && (
          <p>
            <span className={Styles.ProductPrice}>
              {format.formatPrice(product.price)}
            </span>
            und.
          </p>
        )}
        {quantity === 0 ? (
          <Button
            className={Styles.ButtonAddToCart}
            label="Añadir al carrito"
            onClick={() => onAddProductToCart(product)}
          />
        ) : (
          <div
            className={`${Styles.ProductCounter} ${Styles[classNameLayout]}`}
          >
            <Counter
              value={quantity}
              onChangeValue={(value) => onUpdateProductQuantity(product, value)}
            />
          </div>
        )}
      </div>

      {quantity > 0 && (
        <article className="fadeIn">
          <div className={Styles.ProductTotal}>
            <span>{format.formatPrice(quantity * product.price)}</span>
            <span>Total</span>
          </div>

          <Button
            className={Styles.ButtonToCart}
            label="Ir al carrito"
            onClick={goToCart}
          />
        </article>
      )}
    </div>
  );
};

ProductDescriptionBasic.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  layout: PropTypes.number,
};

ProductDescriptionBasic.defaultProps = {
  layout: 1,
};
