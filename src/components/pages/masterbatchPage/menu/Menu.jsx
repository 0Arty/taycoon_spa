import { useTranslation } from "react-i18next";
import style from "./Menu.module.scss"

const Menu = ({ toWhite, toBlack, toColors }) => {

    const {t} = useTranslation()
    return (
        <div className={style.box}>
                <h3>{t('masterbatchPage.menu.heading')}</h3>
                {/* <div className = {style.arrow}>
                    <BackArrow /> 
                </div> */}
                <div className = {style.btns}>
                    <button onClick={toWhite}>{t('masterbatchPage.menu.white')}</button>
                    <button onClick={toBlack}>{t('masterbatchPage.menu.black')}</button>
                    <button onClick={toColors}>{t('masterbatchPage.menu.colors')}</button>
                </div>
        </div>
    )
};

export default Menu;
