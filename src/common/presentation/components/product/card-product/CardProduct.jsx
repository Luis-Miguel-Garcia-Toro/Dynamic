import PropTypes from "prop-types";
import Styles from "./scss/card-product.module.scss";

import "react-lazy-load-image-component/src/effects/blur.css";

import defaultImage from "@/assets/img/default_image.png";
import { cartProductUiTypes } from "@/common/domain";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { format } from "../../../utils";
import { Button } from "../../ui/button/Button";
import { Counter } from "../../ui/counter/Counter";
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
