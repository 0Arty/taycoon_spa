import Card from "./Card";
import style from "./Cards.module.scss"
import { ReactComponent as Delivery } from "../../../../assets/homepage/cards/delivery.svg";
import { ReactComponent as Economy } from "../../../../assets/homepage/cards/economy.svg";
import { ReactComponent as Factory } from "../../../../assets/homepage/cards/factory.svg";
import { ReactComponent as Guarantees } from "../../../../assets/homepage/cards/guarantees.svg";
import { ReactComponent as Laboratory } from "../../../../assets/homepage/cards/laboratory.svg";
import { ReactComponent as Supporting } from "../../../../assets/homepage/cards/supporting.svg";
 
const Cards = ({ props }) => {

    return (
        <div className={style.content}>

            <Card title={'Економія'} text={'- знижки для оптових покупців, можливе відстрочення платежу'} >
                <Economy />
            </ Card>

            <Card title={'Доставка'} text={'- доставляємо по всій Україні'} >
                <Delivery />
            </ Card>
            <Card title={'Гарантії'} text={'- виконуємо замовлення вчасно та на 100%'} >
                <Factory />
            </ Card >
            <Card title={'Виробництво'} text={'- розробка продуктів з урахуванням специфіки, вимог та технології замовника'} >
                <Guarantees />
            </ Card >
            <Card title={'Лабораторія'} text={'- індивідуальні лабораторні аналізи та випробування'} >
                <Laboratory />
            </ Card >
            <Card title={'Лабораторія'} text={'- безкоштовна консультація щодо технічного застосування різних методів термопластичної обробки'} >
                <Supporting />
            </ Card >

        </div >
    )
};

export default Cards;
