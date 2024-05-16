import defaultImage from "@/assets/img/default_image.png";
import { Button, Counter } from "@/common/presentation/components";
import { format } from "@/common/presentation/utils";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cartProductUiTypes } from "../../../../../../common/domain";
import Styles from "./scss/card-product.module.scss";
import { useCardProduct } from "./view-model/useCardProduct";

export const CardProduct = ({ product, type, contentClassName }) => {
  const { title, image } = product;
  const { quantity, onAddProductToCart, onUpdateProductQuantity } =
    useCardProduct({ product });

  return (
    <div className={`${Styles.CardProductContainer} fadeIn`}>
      <div
        className={`${Styles.CardProductContent} ${
          contentClassName ? contentClassName : ""
        } ${Styles[type]}`}
      >
        {/* thumbnail */}
        <div className={Styles.CardProductThumbnail}>
          <figure>
            <LazyLoadImage
              src={image}
              alt={title}
              onError={(e) => {
                e.target.src = defaultImage;
              }}
              effect="blur"
              delayTime={500}
            />
          </figure>
        </div>

        <div className={`${Styles.CardProductBody} ${Styles[type]}`}>
          <h2 className={Styles.CardProductTitle}>
            {`${title}`.length > 50 ? `${title.slice(0, 50)}...` : `${title}`}
          </h2>
          <span className={Styles.CardProductPrice}>
            {format.formatPrice(product.price)}
          </span>
          <div>
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
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    image: PropTypes.string,
    quantity: PropTypes.number,
  }).isRequired,
  type: PropTypes.oneOf(cartProductUiTypes),
  contentClassName: PropTypes.string,
};

CardProduct.defaultProps = {
  type: "vertical",
};
