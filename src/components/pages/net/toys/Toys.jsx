import { useTranslation } from "react-i18next";
import style from "./Toys.module.scss"
import image from '../../../../assets/net/toys.svg'

const Toys = ({props}) => {
const {t} = useTranslation()

  return (
    <div className={style.box}>
    <div className={style.image}>
        <img src={image} alt="пакувальна сітка для овочів та фруктів" />
    </div>
    <div className={style.text}>
        <h4>{t('netPage.toys.heading')}</h4>
        <div className={style.paragraph}>
            <p>{t('netPage.toys.text1')}</p>
            <p>{t('netPage.toys.text2')}</p>
        </div>
    </div>
</div>
  )
};

export default Toys;
