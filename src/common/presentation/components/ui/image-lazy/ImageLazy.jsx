import defaultImage from "@/assets/img/default_image.png";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const ImageLazy = ({ imageUri }) => {
  return (
    <LazyLoadImage
      src={imageUri}
      alt=""
      onError={(e) => {
        e.target.src = defaultImage;
      }}
      effect="blur"
      delayTime={500}
    />
  );
};

ImageLazy.propTypes = {
  imageUri: PropTypes.string.isRequired,
};
