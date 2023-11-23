import style from "./BusinessCard.module.scss"
import { ReactComponent as AdressSVG } from '../../../../../assets/homepage/contacts/adress.svg'
const Address = ({ t }) => {

    return (
        <div className={style.addresBox}>
            <AdressSVG />
            <h4>{t('homePage.contacts.addres')}</h4>
            <span >{t('homePage.contacts.addres text')}</span>
        </div>
    )
};

export default Address;
