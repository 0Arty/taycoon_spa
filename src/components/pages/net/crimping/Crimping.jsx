import style from "./Crimping.module.scss"
import image from '../../../../assets/net/crimping.svg'
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";


const Crimping = ({ props }, ref) => {
    const { t } = useTranslation()

    return (
        <div className={style.box} ref={ref}>
            <div className={style.text}>
                <h4>{t('netPage.crimping.heading')}</h4>

                <div className={style.paragraph}>
                    <p>{t('netPage.crimping.characteristics.text')}</p>
                    <div className={style.table}>
                        <div className={style.left}>
                            <p>{t('netPage.crimping.characteristics.char1')}</p>
                            <p>{t('netPage.crimping.characteristics.char2')}</p>

                        </div>
                        <div className={style.right}>
                            <p>{t('netPage.crimping.characteristics.char3')}</p>
                            <p>{t('netPage.crimping.characteristics.char4')}</p>

                        </div>
                    </div>
                    <p>{t('netPage.crimping.text1')}</p>
                    <p>{t('netPage.crimping.text2')}</p>
                </div>
            </div>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка для овочів та фруктів" />
            </div>

        </div>
    )
};

export default forwardRef(Crimping);
