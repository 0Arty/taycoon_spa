import style from "./Menu.module.scss"
import image from '../../../../assets/homepage/menu/addivites.jpg'
import { useTranslation } from "react-i18next";
import Buttons from "./buttons/Buttons";
import BGImage from "../../../reusable/BGImage/BgImage";

const Menu = ({ refs, toHandle }) => {

    const { t } = useTranslation()
    return (
        <div className={style.box}>
            <BGImage img = {image} alt={'пакувальна сітка'}/>
            
            <div className={style.content}>
                <h3>{t('addPage.heading')}</h3>
                <Buttons refs={refs} toHandle={toHandle}/>
            </div>
        </div>
    )
};

export default Menu;
