import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "../../../store/slices/headerSlice";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import classNames from 'classnames';

import style from "./Header.module.scss"
import style2 from "./Hamburger.module.scss"
import { ReactComponent as Selector } from "../../../assets/header/Selector.svg"
import { ReactComponent as Logo } from "../../../assets/header/Logo.svg"

const Header = ({ props }) => {

    const dispatch = useDispatch()
    const btn = useRef()
    const openMenuhandler = () => {
        dispatch(setIsOpen())
    }
    const isOpen = useSelector((state) => state.headerSlice.isOpen)
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

    return (
        <div className={style.wrapper}>
            <div className={style.content_box}>
                <div className={style.logo}>
                    <Link className={style.logo_link}>
                        <Logo to={'/'} />
                        <h1>Taycoon®</h1>
                    </Link>
                </div>
                <nav className={style.navigation}>
                    <ul >
                        <li><Link className={style.link}>Продукція</Link></li>
                        <li><Link className={style.link}>Про компанію</Link></li>
                        <li><Link className={style.link}>Сертифікати</Link></li>
                        <li><Link className={style.link}>Клієнти</Link></li>
                        <li><Link className={style.link}>Контаки</Link></li>
                        <li>
                            <div className={style.btn}>
                                <span>Ua</span>
                                <Selector />
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className={style.menu}>
                    <div className={style2.menu_wrapper}
                        onClick={() => { openMenuhandler() }}
                    >
                        <div ref={btn}
                            className={classNames(style2.hamburger_menu, { [style2.animate]: isOpen })}>
                        </div>
                    </div>
                </div>


            </div>
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
                            <li><Link className={style.link}>Продукція</Link></li>
                            <li><Link className={style.link}>Про компанію</Link></li>
                            <li><Link className={style.link}>Сертифікати</Link></li>
                            <li><Link className={style.link}>Клієнти</Link></li>
                            <li><Link className={style.link}>Контаки</Link></li>
                            <li>
                                <div className={style.btn}>
                                    <span>Ua</span>
                                    <Selector />
                                </div>
                            </li>
                        </ul>
                    </motion.div>)}
            </AnimatePresence>


        </div>
    )
};

export default Header;
