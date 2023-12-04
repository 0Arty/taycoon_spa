import style from "./Vegetables.module.scss"
import net from '../../../../assets/net/net.svg'
import { useTranslation } from "react-i18next";
import { forwardRef } from "react";

const Vegetables = ({ props }, ref) => {

    const { t } = useTranslation()

    return (
        <div className={style.box} ref={ref}>
            <div className={style.image}>
                <img src={net} alt={t('alt.nets.vegetables')} />
            </div>
            <div className={style.text}>
                <h4>{t('netPage.vegatbles.heading')}</h4>
                <div className={style.paragraph}>
                    <p>{t('netPage.vegatbles.text1')}</p>
                    <p>{t('netPage.vegatbles.text2')}</p>
                    <p>{t('netPage.vegatbles.text3')}</p>
                </div>
            </div>
        </div>
    )
};

export default forwardRef(Vegetables);
