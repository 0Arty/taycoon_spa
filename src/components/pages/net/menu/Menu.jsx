import style from "./Menu.module.scss"
import image from '../../../../assets/homepage/menu/net.png'
import { useTranslation } from "react-i18next";


const Menu = ({ transition }) => {

    const { t } = useTranslation()
    const { toVegetable, toCrimping, toToys, toGlass } = transition


    return (
        <div className={style.box}>
            <div className={style.image}>
                <img src={image} alt="пакувальна сітка" />
            </div>
            <div className={style.content}>
                <h3>{t('netPage.heading')}</h3>
                <div className={style.btns}>
                    <button onClick={toVegetable}>
                        {t('netPage.buttons.vegetables')}
                    </button>
                    <button onClick={toCrimping}>
                        {t('netPage.buttons.crimping')}
                    </button>
                    <button onClick={toToys}>
                        {t('netPage.buttons.toys')}
                    </button>
                    <button onClick={toGlass}>
                        {t('netPage.buttons.glass')}
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Menu;
