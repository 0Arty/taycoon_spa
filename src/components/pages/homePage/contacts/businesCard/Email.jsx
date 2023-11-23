import style from "./BusinessCard.module.scss"
import { ReactComponent as EmailSVG } from '../../../../../assets/homepage/contacts/email.svg'

const Email = ({ t }) => {

    return (
        <div className={style.emailBox}>
            <EmailSVG />
            <h4>{t('homePage.contacts.email')}</h4>
            <span >officetaycoon&shy;@gmail.com</span>
        </div>
    )
};

export default Email;
