import { useTranslation } from "react-i18next";
import style from "./About.module.scss"

const About = ({props}) => {
const {t} = useTranslation()

  return (
    <div className = {style.box}>
        <h5>{t('footer.about.about company')}</h5>
        <h5>{t('footer.about.certificates')}</h5>
        <h5>{t('footer.about.our partners')}</h5>
    </div>
  )
};

export default About;
