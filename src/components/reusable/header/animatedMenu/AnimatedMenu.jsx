import style from "./AnimatedMenu.module.scss"
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LngSelector from "../languageSelector/LngSelector";

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
                        <li><Link className={style.link}>Продукція</Link></li>
                        <li><Link className={style.link}>Про компанію</Link></li>
                        <li><Link className={style.link}>Сертифікати</Link></li>
                        <li><Link className={style.link}>Клієнти</Link></li>
                        <li><Link className={style.link}>Контаки</Link></li>
                        <li><LngSelector /></li>
                    </ul>
                </motion.div>)}
        </AnimatePresence>
    )
};

export default AnimatedMenu;
