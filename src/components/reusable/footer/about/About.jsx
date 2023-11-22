import { useTranslation } from "react-i18next";
import style from "./About.module.scss"
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";

const About = ({ props }) => {
  const { t } = useTranslation()

  return (
    <div className={style.box}>
      <ul>
        <li>
          <Link className={style.link} to={routes.ABOUT}>
            <h5>{t('footer.about.about company')}</h5>
          </Link>
        </li>
        <li>
          <Link className={style.link} to={routes.CERTIFICATES}>
            <h5>{t('footer.about.certificates')}</h5>
          </Link>
        </li>
        <li>
          <Link className={style.link} to={routes.CLIENTS}>
            <h5>{t('footer.about.our partners')}</h5>
          </Link>
        </li>



      </ul>

    </div>
  )
};

export default About;
