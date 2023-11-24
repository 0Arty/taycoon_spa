import style from "./Header.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

import { routes } from "../../../routes";
import LngSelector from "./languageSelector/LngSelector";
import MenuBtn from "./menuBtn/MenuBtn";
import AnimatedMenu from "./animatedMenu/AnimatedMenu";
import { ReactComponent as Logo } from "../../../assets/header/Logo.svg"

const Header = ({ toContact, toProduct }) => {

    const isOpen = useSelector((state) => state.headerSlice.isOpen)
    const { t } = useTranslation()
    const navigate = useNavigate()

    const goToMainHandler = () => {
        navigate('/')
    }


    return (
        <div className={style.wrapper}>
            <div className={style.content_box}>
                <div className={style.logo}>
                    <div className={style.logo_link} onClick={() => {
                        goToMainHandler()
                        toProduct()
                    }} >
                        <Logo />
                        <h1>Taycoon®</h1>
                    </div>
                </div>
                <nav className={style.navigation}>
                    <ul >
                        <li>
                            <Link className={style.link} to={routes.MAIN} onClick={toProduct}>
                                {t("header.product")}
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to={routes.ABOUT}>
                                {t("header.aboutCompany")}
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to={routes.CERTIFICATES}>
                                {t("header.certificats")}
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} to={routes.CLIENTS}>
                                {t("header.clients")}
                            </Link>
                        </li>
                        <li>
                            <Link className={style.link} onClick={toContact} to={routes.MAIN}>
                                {t("header.contacts")}
                            </Link>
                        </li>
                        <li className = {style.lngSelectorLi}>
                            <div className={style.lngSelector}>
                                <LngSelector />

                            </div>
                        </li>
                    </ul>
                </nav>
                <MenuBtn isOpen={isOpen} />
            </div>

            <AnimatedMenu isOpen={isOpen} />

        </div>
    )
};

export default Header;
