import { useTranslation } from "react-i18next";
import style from "./Info.module.scss"
import InfoCard from "./infocard/InfoCard";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";

const Info = ({ props }) => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const goToAbout = () => navigate(routes.ABOUT)
    const goToCertificates = () => navigate(routes.CERTIFICATES)
    const goToClients = () => navigate(routes.CLIENTS)

    return (
        <div className={style.box}>
            <h3>{t('homePage.info.title')}</h3>
            <div className={style.card_container}>
                {/* title, info, onClick */}
                <InfoCard
                    title={t('homePage.info.cards.company')}
                    info={t('homePage.info.cards.company subtitle')}
                    readMore={t('homePage.info.cards.more')}
                    onClick={goToAbout}
                />
                <InfoCard
                    title={t('homePage.info.cards.certificates')}
                    readMore={t('homePage.info.cards.company')}
                    onClick={goToCertificates}
                />
                <InfoCard
                    title={t('homePage.info.cards.our clients')}
                    info={t('homePage.info.cards.client list')}
                    readMore={t('homePage.info.cards.company')}
                    onClick={goToClients}
                />
            </div>
        </div>
    )
};

export default Info;
