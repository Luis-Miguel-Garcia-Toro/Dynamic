// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Styles from "./scss/product-banner.module.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./scss/swiper-styles.scss";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { useEffect } from "react";
// import imageBanner1 from "@/assets/img/banner-1.jpg";
import imageBanner1 from "@/assets/img/bannerABcarnets.jpg";
import { bannerStyle as bannerStyleOptions } from "../../../../../../common/domain";
import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import useProductBanner from "./view_model/useProductBanner"

export const ProductBanner = () => {
  const {getBanners, banner} = useProductBanner()
  const configPage = useEcommerceStore((state) => state.configPages);
  const bannerStyle = configPage?.banner_type || bannerStyleOptions.BASIC;
  const categoryStyle = configPage?.categories_type;

  useEffect(() => {
    getBanners()
  }, [])
  return (
    <div
      className={`${Styles.ProductBanner} fadeIn ${Styles[bannerStyle]} ${Styles[categoryStyle]}`}
    >
      <div
        className={`${Styles.ProductBannerContainer} ${Styles[bannerStyle]}`}
      >
        <Swiper
          style={{
            "--swiper-pagination-color": "var(--color-white)",
            "--swiper-navigation-color": "var(--color-white)",
          }}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className={`product-banner ${bannerStyle}`}
        >
          <SwiperSlide className={Styles.imgContainer}>
            <img alt="" src={imageBanner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={imageBanner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={imageBanner1} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
