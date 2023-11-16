import style from "./Menu.module.scss"
import image from '../../../../assets/homepage/menu/addivites.jpg'
import { useTranslation } from "react-i18next";
import Buttons from "./buttons/Buttons";

const Menu = ({ refs, toHandle }) => {

    const { t } = useTranslation()
    console.log(':')
    return (
        <div className={style.box}>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка" />
            </div>
            <div className={style.content}>
                <h3>{t('netPage.heading')}</h3>
                <Buttons refs={refs} toHandle={toHandle}/>
            </div>
        </div>
    )
};

export default Menu;
