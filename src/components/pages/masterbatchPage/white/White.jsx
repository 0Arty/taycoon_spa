import style from "./White.module.scss"
import WhiteIMG from "../../../../assets/masterbatchpage/white.jpg";
import { forwardRef } from "react";
import TextBlock from "./textBlock/TextBlock";
import TableBlock from "./tableBlock/TableBlock";
import ImageBlock from "../imageBlock/ImageBlock";

const White = ({ }, ref) => {

  return (

    <div className={style.box} ref={ref}>
      {/* <img src={WhiteIMG} alt="asd" className={style.image} id='White'/> */}
      <ImageBlock image={WhiteIMG} text={'Білі барвники для полімерів'} paragraph={'Поліетиленовий суперконцетрат для виробництва плівок, ливарних та екструзійних виробів.'}/>
      <TextBlock />
      <TableBlock />
      <p className={style.addition}>(*) Випробування виконані згідно з методами випробувань Cabot,
        які ґрунтуються на міжнародних стандартах. Зазначені результати випробувань не повинні використовуватися як специфікації,
        це типові значення, наведені для інформації.
      </p>
      <p className={style.conclusion}>
        Для додавання PLASWITE® PE7024 до пластмаси рекомендується використовувати автоматичні дозатори. 
        Це може бути виконано або безпосередньо перед виробництвом, або перед попереднім замішуванням пластмаси.
         Кількість суперконцентрату, яку слід додавати, залежить від конкретних вимог щодо кінцевого продукту. 
         Зазвичай стандартний рівень додавання барвника коливається від 1% до 5%, але це може бути налаштовано відповідно до потреб конкретного проекту чи виробника
      </p>
    </div>
  )
};

export default forwardRef(White);

