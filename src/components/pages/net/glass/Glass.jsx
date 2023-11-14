import style from "./Glass.module.scss"
import image from '../../../../assets/net/glass.svg'
import { useTranslation } from "react-i18next";

const Glass = ({ props }) => {

    const { t } = useTranslation()

    return (
        <div className={style.box}>

            <div className={style.text}>
                <h4>{t('netPage.glass.heading')}</h4>
                <div className={style.paragraph}>
                    <p>{t('netPage.glass.text1')}</p>
                    <p>{t('netPage.glass.text2')}</p>
                    <p>{t('netPage.glass.text2')}</p>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка для овочів та фруктів" />
            </div>
        </div>
    )
};

export default Glass;
