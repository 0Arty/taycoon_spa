import Card from "./Card";
import style from "./Cards.module.scss"
import { ReactComponent as Delivery } from "../../../../assets/homepage/cards/delivery.svg";
import { ReactComponent as Economy } from "../../../../assets/homepage/cards/economy.svg";
import { ReactComponent as Factory } from "../../../../assets/homepage/cards/factory.svg";
import { ReactComponent as Guarantees } from "../../../../assets/homepage/cards/guarantees.svg";
import { ReactComponent as Laboratory } from "../../../../assets/homepage/cards/laboratory.svg";
import { ReactComponent as Supporting } from "../../../../assets/homepage/cards/supporting.svg";
import { useTranslation } from "react-i18next";

const Cards = ({ props }) => {

    const { t } = useTranslation()
    return (
        <div className={style.content}>

            <Card title={t('homePage.cards.saving')} text={t('homePage.cards.saving subtitle')} >
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

        </div >
    )
};

export default Cards;
