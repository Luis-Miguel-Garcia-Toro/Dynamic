import { Button, Counter, ImageLazy } from "@/common/presentation/components"
import { format } from "@/common/presentation/utils"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { cartProductUiTypes } from "../../../../../../common/domain"
import Styles from "./scss/card-product-list.module.scss"
import { useCardProduct } from "./view-model/useCardProduct"
import { useEcommerceStore } from '../../../../../../common/infrastructure/store'
import { useEffect } from "react"
import { FaPlusCircle, FaRegCheckCircle } from "react-icons/fa";

export const CardProductSuggesList = ({
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
        className={`${Styles.CardProductContent} ${contentClassName ? contentClassName : ""
          } ${Styles[type]} ${Styles[sizeCardRow]}`}
      >

        <div className={Styles.CardProductThumbnail}>
          <div className={Styles.buttonCardSuggested}>
            {quantity <= 0 ? (
              <FaPlusCircle size={20} onClick={() => onAddProductToCart(product, product.quantity_suggested)}/>
            ) : (
              <FaRegCheckCircle size={20} style={{ color: "green " }} />
            )}
          </div>
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
            <div className={Styles.CardProductCounter}>
              <Counter
                value={quantity > 0 ? quantity : product.quantity_suggested == 0 ? 1 : product.quantity_suggested}
                onChangeValue={(value) =>
                  onUpdateProductQuantity(product, value)
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CardProductSuggesList.propTypes = {
  product: PropTypes.object.isRequired,
  type: PropTypes.oneOf(cartProductUiTypes),
  contentClassName: PropTypes.string,
  sizeCardRow: PropTypes.oneOf(["small", "medium"]),
};

CardProductSuggesList.defaultProps = {
  type: "vertical",
  sizeCardRow: "medium",
};
