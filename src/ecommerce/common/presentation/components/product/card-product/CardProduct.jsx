import defaultImage from "@/assets/img/default_image.png";
import { Button, Counter } from "@/common/presentation/components";
import { format } from "@/common/presentation/utils";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { cartProductUiTypes } from "../../../../domain";
import Styles from "./scss/card-product.module.scss";
import { useCardProduct } from "./view-model/useCardProduct";

export const CardProduct = ({ product, type }) => {
  const { title, image } = product;
  const { onChangeQuantity, quantity } = useCardProduct();

  return (
    <div className={Styles.CardProductContainer}>
      <div className={`${Styles.CardProductContent} ${Styles[type]}`}>
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
          <h2 className={Styles.CardProductTitle}>{title}</h2>
          <span className={Styles.CardProductPrice}>
            {format.formatPrice(product.price)}
          </span>
          <div>
            {quantity <= 0 ? (
              <Button
                onClick={() => onChangeQuantity(1)}
                className={`${Styles.CardProductButton} ${Styles[type]}`}
                label="Añadir"
              />
            ) : (
              <div className={Styles.CardProductCounter}>
                <Counter value={quantity} onChangeValue={onChangeQuantity} />
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
  }).isRequired,
  type: PropTypes.oneOf(cartProductUiTypes),
};

CardProduct.defaultProps = {
  type: "vertical",
};
