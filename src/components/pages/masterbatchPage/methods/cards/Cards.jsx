import { useTranslation } from "react-i18next";
import Card from "./Card";
import style from "./Cards.module.scss"

const Cards = ({ props }) => {
    const { t } = useTranslation()

    return (
        <div className={style.container}>
            <Card
                heading={t('masterbatchPage.methods.cards.card1.heading')}
                text={t('masterbatchPage.methods.cards.card1.text')}
            />
            <Card
                heading={t('masterbatchPage.methods.cards.card2.heading')}
                text={t('masterbatchPage.methods.cards.card2.text')}
            />
            <Card
                heading={t('masterbatchPage.methods.cards.card3.heading')}
                text={t('masterbatchPage.methods.cards.card3.text')}
            />
            <Card
                heading={t('masterbatchPage.methods.cards.card4.heading')}
                text={t('masterbatchPage.methods.cards.card4.text')}
            />

        </div>
    )
};

export default Cards;
