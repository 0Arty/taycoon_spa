import style from "./Contacts.module.scss"
import BusinessCard from "./businesCard/BusinessCard";
import { ReactComponent as ContacSVG } from '../../../../assets/homepage/g8.svg'
import { useTranslation } from "react-i18next";

const Contacts = ({ props }) => {

    const {t} = useTranslation()

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <h3>{t('homePage.contacts.how to contact')} </h3>
                <BusinessCard />
                <div className={style.svg}>
                    <ContacSVG />
                </div>
            </div>

        </div>
    )
};

export default Contacts;
