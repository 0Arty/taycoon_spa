import style from "./Menu.module.scss"
import image from '../../../../assets/homepage/menu/net.png'
import { useTranslation } from "react-i18next";


const Menu = ({ props }) => {

    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка" />
            </div>
            <div className={style.content}>
                <h3>{t('netPage.heading')}</h3>
                <div className={style.btns}>
                    <button>{t('netPage.buttons.vegetables')}</button>
                    <button>{t('netPage.buttons.crimping')}</button>
                    <button>{t('netPage.buttons.toys')}</button>
                    <button>{t('netPage.buttons.glass')}</button>
                </div>
            </div>
        </div>
    )
};

export default Menu;
