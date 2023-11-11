import { useTranslation } from "react-i18next";
import style from "./Info.module.scss"
import InfoCard from "./infocard/InfoCard";

const Info = ({ props }) => {


    const handlerLink = () => { }
    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <h3>{t('homePage.info.title')}</h3>
            <div className={style.card_container}>
                {/* title, info, onClick */}
                <InfoCard
                    title={t('homePage.info.cards.company')}
                    info={t('homePage.info.cards.company subtitle')}
                    readMore={t('homePage.info.cards.more')}
                    onClick={handlerLink}
                />
                <InfoCard
                    title={t('homePage.info.cards.certificates')}
                    readMore={t('homePage.info.cards.company')}
                    onClick={handlerLink}
                />
                <InfoCard
                    title={t('homePage.info.cards.our clients')}
                    info={t('homePage.info.cards.client list')}
                    readMore={t('homePage.info.cards.company')}
                    onClick={handlerLink}
                />
            </div>
        </div>
    )
};

export default Info;
