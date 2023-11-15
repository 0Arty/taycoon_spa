import { useTranslation } from "react-i18next";

import style from "./Ecology.module.scss"
import ecology from '../../../../assets/about/eco.jpg'



const Ecology = ({ props }) => {
    const { t } = useTranslation()

    return (
        <div className={style.wrapper}>
            <img src={ecology} alt={t('aboutPage.img.eco')} />
            <div className={style.content}>
                <h4>{t('aboutPage.eco.heading')}</h4>
                <div className = {style.paragraphs}>

                <p>{t('aboutPage.eco.p1')}</p>
                <p>{t('aboutPage.eco.p2')}</p>
                <p>{t('aboutPage.eco.p3')}</p>
                <p>{t('aboutPage.eco.p4')}</p>
                <p>{t('aboutPage.eco.p5')}</p>
                <p className = {style.last}>{t('aboutPage.eco.p6')}</p>
                </div>
            </div>
        </div>
    )
};

export default Ecology;
