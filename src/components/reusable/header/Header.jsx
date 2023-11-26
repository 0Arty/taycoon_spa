import style from "./Header.module.scss"
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { routes } from "../../../routes";
import { Link, useNavigate } from "react-router-dom";

import { ReactComponent as Logo } from "../../../assets/header/Logo.svg"
import { AnimatePresence, motion } from "framer-motion";

import LngSelector from "./languageSelector/LngSelector";
import AnimatedMenu from "./animatedMenu/AnimatedMenu";
import MenuBtn from "./menuBtn/MenuBtn";

const Header = ({ toContact, toProduct }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const goToMainHandler = () => {
        navigate('/')
    }
    const variableForAnimation = {
        init: {
            y: -250,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        exit: {
            y: -250,
            opacity: 0,
        }
    }
    const [isOpen, setIsOpen] = useState( false)

    const closeOnClickOutSide = () => setIsOpen(false) 

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
                        <li className={style.lngSelectorLi}>
                            <div className={style.lngSelector}>
                                <LngSelector />

                            </div>
                        </li>
                    </ul>
                </nav>
                <MenuBtn isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
            <AnimatePresence>
                {isOpen &&
                    <motion.div
                        className={style.menu_window}
                        variants={variableForAnimation}
                        initial={'init'}
                        animate={'animate'}
                        exit={'exit'}
                        transition={{ duration: 0.5 }}
                    >
                        <AnimatedMenu 
                        setIsOpen={closeOnClickOutSide} 
                        toContact={toContact} 
                        toProduct={toProduct}
                        />
                    </motion.div>

                }
            </AnimatePresence>
        </div>
    )
};

export default Header;
