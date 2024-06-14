import { Button, Counter, ImageLazy } from "@/common/presentation/components";
import { format } from "@/common/presentation/utils";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { cartProductUiTypes } from "../../../../../../common/domain";
import Styles from "./scss/card-product.module.scss";
import { useCardProduct } from "./view-model/useCardProduct";

export const CardProductCart = ({
  product,
  type,
  contentClassName,
  sizeCardRow,
}) => {
  const { title, imagen } = product;
  const {
    quantity,
    onAddProductToCart,
    onUpdateProductQuantity,
    generateProductSlug,
  } = useCardProduct({ product });

  console.log(product);
  return (
    <div className={`${Styles.CardProductContainer} fadeIn`}>
      <div
        className={`${Styles.CardProductContent} ${contentClassName ? contentClassName : ""
          } ${Styles[type]} ${Styles[sizeCardRow]}`}
      >
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

        <div className={`${Styles.CardProductBody} ${Styles[type]}`}>
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

          <div className={Styles.CardProductPriceContainerCart}>
            <span className={Styles.CardProductTax}>
              Precio sin impuestos: {format.formatPrice(product.price)}
            </span>
            {parseInt(product.tax) > 0 &&
              <span className={Styles.CardProductTax}>
                Precio con Iva: {format.formatDecimalPrice((parseFloat(product.price)) + (parseFloat(product.price) * parseFloat(product.tax) / 100))}
              </span>}
            {parseInt(product.tax2) > 0 &&
              <span className={Styles.CardProductTax}>
                Precio con Iva: {format.formatDecimalPrice((parseFloat(product.price)) + (parseFloat(product.price) * parseFloat(product.tax2) / 100))}
              </span>}
            {parseInt(product.tax3) > 0 &&
              <span className={Styles.CardProductTax}>
                Imp. Azucarados: {format.formatDecimalPrice(product.tax3)}
              </span>}
            <span className={Styles.CardProductPrice}>
              Total {format.formatPrice(
                (parseInt(product.price)) + (parseInt(product.price) * parseInt(product.tax) / 100) + parseFloat(product.tax3)
              )}
            </span>


          </div>

          <div className={Styles.CardProductButtonContainer}>
            {quantity <= 0 ? (
              <Button
                onClick={() => onAddProductToCart(product)}
                className={`${Styles.CardProductButton} ${Styles[type]}`}
                label="Añadir"
              />
            ) : (
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
    </div>
  );
};

CardProductCart.propTypes = {
  product: PropTypes.object.isRequired,
  type: PropTypes.oneOf(cartProductUiTypes),
  contentClassName: PropTypes.string,
  sizeCardRow: PropTypes.oneOf(["small", "medium"]),
};

CardProductCart.defaultProps = {
  type: "vertical",
  sizeCardRow: "medium",
};
