import Card from "./Card";
import style from "./Cards.module.scss"
import { ReactComponent as Delivery } from "../../../../assets/homepage/cards/delivery.svg";
import { ReactComponent as Economy } from "../../../../assets/homepage/cards/economy.svg";
import { ReactComponent as Factory } from "../../../../assets/homepage/cards/factory.svg";
import { ReactComponent as Guarantees } from "../../../../assets/homepage/cards/guarantees.svg";
import { ReactComponent as Laboratory } from "../../../../assets/homepage/cards/laboratory.svg";
import { ReactComponent as Supporting } from "../../../../assets/homepage/cards/supporting.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Cards = ({ props }) => {

    const { t } = useTranslation()
    const contentAnimation = {

        hidden: {
            x: 300,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.3
            }
        }),
    }
    return (
     <motion.div className={style.content}
     initial='hidden'
     whileInView='visible'
     variants={contentAnimation}
     custom={1}
     >

            <Card title={t('homePage.cards.saving')} text={t('homePage.cards.saving subtitle')} 
            vari>
                <Economy />
            </ Card>

            <Card title={t('homePage.cards.delivery')} text={t('homePage.cards.delivery subtitle')} >
                <Delivery />
            </ Card>
            <Card title={t('homePage.cards.guarantees')} text={t('homePage.cards.guarantees subtitle')} >
                <Factory />
            </ Card >
            <Card title={t('homePage.cards.fabric')} text={t('homePage.cards.fabric subtitle')} >
                <Guarantees />
            </ Card >
            <Card title={t('homePage.cards.lab')} text={t('homePage.cards.lab subtitle')} >
                <Laboratory />
            </ Card >
            <Card title={t('homePage.cards.support')} text={t('homePage.cards.support subtitle')} >
                <Supporting />
            </ Card >

        </motion.div >
    )
};

export default Cards;
