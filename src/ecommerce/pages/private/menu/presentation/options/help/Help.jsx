import { ImageLazy } from "../../../../../../../common/presentation/components";
import { useEcommerceStore } from "../../../../../../common/infrastructure/store";
import { HelpCenterItem, OpeningHoursItem } from "./components";
import Styles from "./scss/help.module.scss";

export const Help = () => {
  const configPage = useEcommerceStore((state) => state.configPages);
  const helpCenter = configPage?.help_center || [];
  const helpCenterSection =
    helpCenter.filter((item) => item.seccion === "Centro de ayuda") || [];
  const imagesSection = helpCenter.filter((item) => item.seccion === "Imagen");
  const openingHours =
    helpCenter.filter((item) => item.seccion === "Footer") || [];

  return (
    <div>
      <h1>Centro de ayuda</h1>
      <section className={Styles.helpCenterGrid}>
        {helpCenterSection.map((item, index) => (
          <HelpCenterItem item={item} key={`${item.title}-${index}`} />
        ))}
      </section>
      <section className={Styles.helpCenterImages}>
        <div className={Styles.helpCenterImagesGrid}>
          {imagesSection.map((image) => (
            <figure key={image.title}>
              <ImageLazy imageUri={image.img} />
            </figure>
          ))}
        </div>
      </section>
      {openingHours.length > 0 && (
        <section className={Styles.helpCenterOpeningHours}>
          <h3>Horario de atención</h3>
          <div className={Styles.helpCenterOpeningHoursGrid}>
            {openingHours.map((item) => (
              <OpeningHoursItem key={item.title} item={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
