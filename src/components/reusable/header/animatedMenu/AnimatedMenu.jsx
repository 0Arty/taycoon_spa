import style from "./AnimatedMenu.module.scss"
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { routes } from "../../../../routes";
import LngSelector from "../languageSelector/LngSelector";
import { useEffect, useRef } from "react";


const AnimatedMenu = ({ isOpen }) => {

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
    const { t } = useTranslation()


    return (
        <AnimatePresence >
            {isOpen && (
                <motion.div
                    className={style.menu_window}
                    variants={variableForAnimation}
                    initial={'init'}
                    animate={'animate'}
                    exit={'exit'}
                    transition={{ duration: 0.5 }}

                >
                    <ul >
                        <li>
                            <Link className={style.link} to={routes.MAIN}>
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
                            <Link className={style.link}
                            >
                                {t("header.contacts")}
                            </Link>
                        </li>
                        <li className={style.selector}>
                            <LngSelector />
                        </li>
                    </ul>
                </motion.div>)}
        </AnimatePresence>
    )
};

export default AnimatedMenu;