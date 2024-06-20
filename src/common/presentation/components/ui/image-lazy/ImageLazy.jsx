import defaultImage from "@/assets/img/default_image.png";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useEcommerceStore } from "../../../../../ecommerce/common/infrastructure/store";

export const ImageLazy = ({ imageUri }) => {
  const imageDefaultBusiness = useEcommerceStore(
    (state) => state.configPages?.images?.no_found_product
  );
  let imageProduct = imageUri ? imageUri : imageDefaultBusiness
  return (
    <LazyLoadImage
      src={imageProduct}
      alt=""
      onError={(e) => {
        e.target.src = imageDefaultBusiness
          ? imageDefaultBusiness
          : defaultImage;
      }}
      effect="blur"
      delayTime={500}
    />
  );
};

ImageLazy.propTypes = {
  imageUri: PropTypes.string.isRequired,
};
