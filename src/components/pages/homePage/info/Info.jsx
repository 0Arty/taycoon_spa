import { useTranslation } from "react-i18next";
import style from "./Info.module.scss"
import InfoCard from "./infocard/InfoCard";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../../routes";
import { motion } from "framer-motion";

const Info = ({ props }) => {

    const navigate = useNavigate()
    const { t } = useTranslation()

    const goToAbout = () => navigate(routes.ABOUT)
    const goToCertificates = () => navigate(routes.CERTIFICATES)
    const goToClients = () => navigate(routes.CLIENTS)


    const contentAnimation = {
        hidden: {
            y: 200,
            opacity: 0,
        },
        visible: custom => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.3
            }
        }),
    }

    return (
        <motion.div className={style.box}
            initial='hidden'
            whileInView='visible'
            variants={contentAnimation}
            custom={0}
        >
            <h3>{t('homePage.info.title')}</h3>
            <div className={style.extrawrapper}>

                <div className={style.card_container}>

                    <div className = {style.gridItem}>

                        <InfoCard
                            title={t('homePage.info.cards.company')}
                            info={t('homePage.info.cards.company subtitle')}
                            readMore={t('homePage.info.cards.more')}
                            onClick={goToAbout}
                            className={style.item1}
                        />
                    </div>
                    <div className = {style.gridItem}>

                        <InfoCard
                            title={t('homePage.info.cards.certificates')}
                            readMore={t('homePage.info.cards.company')}
                            onClick={goToCertificates}
                            className={style.item2}
                        />
                    </div>
                    <div className = {style.gridItem}>

                        <InfoCard
                            title={t('homePage.info.cards.our clients')}
                            info={t('homePage.info.cards.client list')}
                            readMore={t('homePage.info.cards.company')}
                            onClick={goToClients}
                            className={style.item2}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    )
};

export default Info;
