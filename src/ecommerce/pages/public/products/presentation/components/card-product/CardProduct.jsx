import { Button, Counter, ImageLazy } from "@/common/presentation/components"
import { format } from "@/common/presentation/utils"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { cartProductUiTypes } from "../../../../../../common/domain"
import Styles from "./scss/card-product.module.scss"
import { useCardProduct } from "./view-model/useCardProduct"
import {useEcommerceStore} from '../../../../../../common/infrastructure/store'

export const CardProduct = ({
  product,
  type,
  contentClassName,
  sizeCardRow,
}) => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const { title, imagen } = product;
  const {
    quantity,
    onAddProductToCart,
    onUpdateProductQuantity,
    generateProductSlug,
  } = useCardProduct({ product });

  return (
    <div className={`${Styles.CardProductContainer} fadeIn`}>
      <div
        className={`${Styles.CardProductContent} ${
          contentClassName ? contentClassName : ""
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
          <div className={Styles.CardProductPriceContainer}>
            <span className={Styles.CardProductPrice}>
              {format.formatPrice(product.price)}
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

CardProduct.propTypes = {
  product: PropTypes.object.isRequired,
  type: PropTypes.oneOf(cartProductUiTypes),
  contentClassName: PropTypes.string,
  sizeCardRow: PropTypes.oneOf(["small", "medium"]),
};

CardProduct.defaultProps = {
  type: "vertical",
  sizeCardRow: "medium",
};
