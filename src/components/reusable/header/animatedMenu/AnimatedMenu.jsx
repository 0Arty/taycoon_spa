import style from "./AnimatedMenu.module.scss"
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../../../routes";
import LngSelector from "../languageSelector/LngSelector";
import { useEffect, useRef } from "react";

const AnimatedMenu = ({ setIsOpen, toContact }) => {

    const closeMenuHandler = () => {setIsOpen()}
    const { t } = useTranslation()
    const menuRef = useRef(null)
    const handleClickOutside = (event) => {
        if (!menuRef.current) return
        if (!menuRef.current.contains(event.target)) {
            closeMenuHandler()
        }
    }

    useEffect(() => {
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside)

        }, 200)

        return () => document.removeEventListener('click', handleClickOutside)
    })

    



    return (


        <div className={style.container} ref={menuRef}>

            <ul >
                <li>
                    <Link className={style.link} to={routes.MAIN } onClick={()=>{closeMenuHandler()}}>
                        {t("header.product")}
                    </Link>
                </li>
                <li>
                    <Link className={style.link} to={routes.ABOUT} onClick={()=>{closeMenuHandler()}}>
                        {t("header.aboutCompany")}
                    </Link>
                </li>
                <li>
                    <Link className={style.link} to={routes.CERTIFICATES} onClick={()=>{closeMenuHandler()}}>
                        {t("header.certificats")}
                    </Link>
                </li>
                <li>
                    <Link className={style.link} to={routes.CLIENTS} onClick={()=>{closeMenuHandler()}}>
                        {t("header.clients")}
                    </Link>
                </li>
                <li>
                    <Link className={style.link}
                    onClick={()=>{
                        toContact()
                        closeMenuHandler()
                    }}
                    >
                        {t("header.contacts")}
                    </Link>
                </li>
                <li className={style.selector}>
                    <LngSelector />
                </li>
            </ul>
        </div>


    )
};

export default AnimatedMenu;