import style from "./Cards.module.scss"
import { ReactComponent as SVG1 } from "../../../../assets/net/Vector.svg";
import { ReactComponent as SVG2 } from "../../../../assets/net/Vector2.svg";
import { useTranslation } from "react-i18next";
import strong from '../../../../assets/net/cards/strong.svg'
import eco from '../../../../assets/net/cards/eco.svg'
import list from '../../../../assets/net/cards/list.svg'


import Card from "./card/Card";

const Cards = ({ props }) => {
    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <h4>{t('netPage.cards.heading')}</h4>
                <div className={style.container}>
                    <Card
                        heading={t('netPage.cards.card1 head')}
                        title={t('netPage.cards.card1 title')}
                        svg={strong}
                    />
                    <Card
                        heading={t('netPage.cards.card2 head')}
                        title={t('netPage.cards.card2 title')}
                        svg={list}
                    />
                    <Card
                        heading={t('netPage.cards.card3 head')}
                        title={t('netPage.cards.card3 title')}
                        svg={eco}
                    />
                </div>
                <SVG2 className={style.svg2} />
                <SVG1 className={style.svg1} />
            </div>




        </div>
    )
};

export default Cards;
