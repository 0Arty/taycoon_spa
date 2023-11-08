import classNames from "classnames";
import style from "./BusinessCard.module.scss"
import { ReactComponent as Adress } from '../../../../assets/homepage/contacts/adress.svg'
import { ReactComponent as Email } from '../../../../assets/homepage/contacts/email.svg'
import { ReactComponent as Phone } from '../../../../assets/homepage/contacts/phone.svg'

const BusinessCard = ({ props }) => {


  return (
    <div className={style.box}>

      <div className={classNames(style.card1, style.card)}>
        <div className={style.content}>

          <Email />
          <h4>Пошта</h4>
          <span >officetaycoon@gmail.com</span>
        </div>
      </div>

      <div className={classNames(style.card2, style.card)}>
        <div className={style.content}>

          <Adress />
          <h4>Адреса</h4>
          <span >м. Київ , вул. Щекавицька 9-а (офіс)</span>

        </div>

      </div>

      <div className={classNames(style.card3, style.card)}>
        <div className={style.content}>

          <div className = {style.heading}>
            <Phone />
            <h4>Телефон</h4>
          </div>
          <div className={style.numbers}>
            <div>
              <h5>Офіс</h5><span>+38(067)-371-48-45</span>
            </div>
            <div>
              <h5>Відділ збуту</h5>
              <span>+38(067)-401-60-52</span>
            </div>
            <div>
              <h5>Відділ збуту</h5><span>+38(067)-170-96-00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BusinessCard;
