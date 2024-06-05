// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import Styles from "./scss/product-banner.module.scss"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import "./scss/swiper-styles.scss"

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import imageBanner1 from "@/assets/img/banner-1.png"
import imageBanner2 from "@/assets/img/banner-2.png"
import { useAppStore } from "../../../../../../../common/infrastructure/store"
import { bannerStyle as bannerStyleOptions } from "../../../../../../common/domain"

export const ProductBanner = () => {
  const configPage = useAppStore((state) => state.configPages);
  const bannerStyle = configPage?.banner?.style || bannerStyleOptions.BASIC;

  return (
    <div className={`${Styles.ProductBanner} fadeIn ${Styles[bannerStyle]}`}>
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
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className={`product-banner ${bannerStyle}`}
        >
          <SwiperSlide>
            <img alt="" src={imageBanner1} />
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" src={imageBanner2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
