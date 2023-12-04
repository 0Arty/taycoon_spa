import { useTranslation } from "react-i18next";
import Card from "./Card";
import style from "./Cards.module.scss"
import { motion } from "framer-motion";

const Cards = ({ props }) => {
    const { t } = useTranslation()
    const contentAnimation = {
        hidden: custom => ({
            x: custom.startPosition * 10,
            opacity: 0,
        }),
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom.delay * 0.2,
                duration: 0.3
            }
        }),
    }
    return (
        <motion.div className={style.container}
            initial='hidden'
            whileInView='visible'
            variants={contentAnimation}
            custom={{ delay: 1, startPosition: 30 }}
        >
            <div className={style.card}>
                <Card
                    heading={t('masterbatchPage.methods.cards.card1.heading')}
                    text={t('masterbatchPage.methods.cards.card1.text')}
                />
            </div>
            <div className={style.card}>
                <Card
                    heading={t('masterbatchPage.methods.cards.card2.heading')}
                    text={t('masterbatchPage.methods.cards.card2.text')}
                />
            </div>
            <div className={style.card}>
                <Card
                    heading={t('masterbatchPage.methods.cards.card3.heading')}
                    text={t('masterbatchPage.methods.cards.card3.text')}
                />
            </div>
            <div className={style.card}>
                <Card
                    heading={t('masterbatchPage.methods.cards.card4.heading')}
                    text={t('masterbatchPage.methods.cards.card4.text')}
                />
            </div>
        </motion.div>
    )
};

export default Cards;
