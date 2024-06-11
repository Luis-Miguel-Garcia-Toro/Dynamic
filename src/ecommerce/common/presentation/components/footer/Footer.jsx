import { icons } from "../../../../../common/presentation/utils";
import Styles from "./scss/footer.module.scss";
import { useFooter } from "./view-model/useFooter";

export const Footer = () => {
  const { logo, menuPolicies, socialMedia, clientServiceData } = useFooter();

  return (
    <footer className={Styles.FooterContainer}>
      <div className={Styles.FooterContent}>
        <section>
          {logo && (
            <figure className={Styles.FooterLogoContainer}>
              <img alt="" src={logo} />
            </figure>
          )}

          <div className={Styles.FooterSocialContainer}>
            {socialMedia.map(({ title, url_redirect }) => (
              <a key={title} target="_blank" href={url_redirect}>
                {icons.getIcons(title)}
              </a>
            ))}
          </div>
        </section>
        <section className={Styles.FooterListContainer}>
          <ul className={Styles.FooterList}>
            {menuPolicies.map((menu) => (
              <li key={menu.title}>
                <a target="_blank" href={menu.url_redirect}>
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>

          <div className={Styles.ContactContainer}>
            {Object.keys(clientServiceData).map((key) => (
              <div key={key}>
                <h3>{key}</h3>
                <ul>
                  {clientServiceData[key].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className={Styles.FooterCopyright}>
        <span>{`© Celuweb ${new Date().getFullYear()}. Todos los derechos reservados`}</span>
      </div>
    </footer>
  );
};
