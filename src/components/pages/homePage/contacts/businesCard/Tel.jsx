import style from "./BusinessCard.module.scss"
import { ReactComponent as PhoneSVG } from '../../../../../assets/homepage/contacts/phone.svg'


const Tel = ({ t }) => {

    return (
        <div className={style.telBox}>
            <div className={style.svgContainer}>
                <PhoneSVG />
            </div>
            <div className={style.info}>
                <h4>{t('homePage.contacts.tel')}</h4>
                <h5>{t('homePage.contacts.office')} <span>+38(067)-371-48-45</span></h5>
                <h5>{t('homePage.contacts.sales department')}<span>+38(067)-401-60-52</span></h5>
                <h5>{t('homePage.contacts.sales department')}<span>+38(067)-170-96-00</span></h5>
            </div>
        </div>
    )
};

export default Tel;
