import { Counter, ImageLazy } from "@/common/presentation/components"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import Styles from "./scss/card-product-cart.module.scss"
import { useCardProduct } from "./view-model/useCardProduct"

export const CardProductCart = ({ product, size, showButtons }) => {
  const { title, imagen } = product;
  const {
    generateProductSlug,
    onUpdateProductQuantity,
    productPrices,
    quantity,
  } = useCardProduct({ product });

  return (
    <div className={`${Styles.CardProductCartContainer} fadeIn`}>
      <div className={`${Styles.CardProductContent} ${Styles[size]}`}>
        {/* thumbnail */}
        <div className={Styles.CardProductThumbnail}>
          <figure>
            <Link
              to={`/products/${generateProductSlug(product)}`}
              state={{
                product: product,
              }}
            >
              <ImageLazy imageUri={imagen} />
            </Link>
          </figure>
        </div>

        <div className={Styles.CardProductBody}>
          <Link
            className={Styles.CardProductTitle}
            to={`/products/${generateProductSlug(product)}`}
            state={{
              product: product,
            }}
          >
            <h2>
              {`${title}`.length > 30 ? `${title.slice(0, 30)}...` : `${title}`}
            </h2>
          </Link>

          <div className={Styles.CardProductPriceContainer}>
            <span className={Styles.CardProductPriceItem}>
              Precio sin impuestos: {productPrices.priceWithoutTax}
            </span>
            {productPrices.priceWithTax && (
              <span className={Styles.CardProductPriceItem}>
                Precio con Iva: {productPrices.priceWithTax}
              </span>
            )}
            {productPrices.priceWithTax2 && (
              <span className={Styles.CardProductPriceItem}>
                Precio con Ultraprocesado: {productPrices.priceWithTax2}
              </span>
            )}
            {productPrices.sugaryTax && (
              <span className={Styles.CardProductPriceItem}>
                Imp. Azucarados: {productPrices.sugaryTax}
              </span>
            )}
            <span className={Styles.CardProductPriceTotal}>
              Total {productPrices.totalPrice}
            </span>
          </div>
        </div>

        <div className={Styles.CardProductButtonContainer}>
          {quantity > 0 && showButtons && (
            <div className={Styles.CardProductCounter}>
              <Counter
                value={quantity}
                onChangeValue={(value) =>
                  onUpdateProductQuantity(product, value)
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

CardProductCart.propTypes = {
  product: PropTypes.object.isRequired,
  size: PropTypes.oneOf(["small", "large"]),
  showButtons: PropTypes.bool,
};

CardProductCart.defaultProps = {
  size: "large",
  showButtons: true,
};
