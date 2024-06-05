import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { useAppStore } from "../../../../../common/infrastructure/store"
import Styles from "./scss/footer.module.scss"

export const Footer = () => {
  const { configPages } = useAppStore();
  const logo = configPages?.auth?.login?.logo;

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
            <FaFacebook />
            <FaTwitter  />
            <FaInstagram />
          </div>
        </section>
        <section className={Styles.FooterListContainer}>
          <ul className={Styles.FooterList}>
            <li>Aviso de privacidad</li>
            <li>Política de tratamiento protección de datos</li>
            <li>Términos y condiciones</li>
          </ul>

          <div className={Styles.ContactContainer}>
            <div>
              <h3>Servicio al cliente</h3>
              <ul>
                <li>Línea gratuita nacional: 018000110000</li>
                <li>Líneas de WhatsApp: 311 2361452 - 311 2361453</li>
                <li>Correo electrónico: ccbogota@alquería.com.co</li>
              </ul>
            </div>

            <div>
              <h3>Horario de atención</h3>
              <ul>
                <li>Lunes a jueves de 8:00 am a 5:00 pm</li>
                <li>Viernes 8:00 am a 4:00 pm</li>
                <li>Sábado 8:00 am a 2:00 pm</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
      <div className={Styles.FooterCopyright}>
        <span>{`© Celuweb ${new Date().getFullYear()}. Todos los derechos reservados`}</span>
      </div>
    </footer>
  );
};
