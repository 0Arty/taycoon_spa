import style from "./Glass.module.scss"
import image from '../../../../assets/net/glass.svg'
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

const Glass = ({ props }, ref) => {

    const { t } = useTranslation()

    return (
        <div className={style.box} ref={ref}>

            <div className={style.text}>
                <h4>{t('netPage.glass.heading')}</h4>
                <div className={style.paragraph}>
                    <p>{t('netPage.glass.text1')}</p>
                    <p>{t('netPage.glass.text2')}</p>
                    <p>{t('netPage.glass.text3')}</p>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка для овочів та фруктів" />
            </div>
        </div>
    )
};

export default forwardRef(Glass) ;
