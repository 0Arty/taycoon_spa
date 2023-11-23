import style from "./Company.module.scss"
import { ReactComponent as Logo } from "../../../../assets/header/Logo.svg";
import { useTranslation } from "react-i18next";
import { ReactComponent as Svg } from '../../../../assets/Vector.svg'
import { motion } from "framer-motion";


const Company = ({ props }) => {

    const { t } = useTranslation()

    const contentAnimation = {
        hidden: {
            x: -200,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.3
            }
        }),
    }

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <motion.div className={style.heading}
                    initial='hidden'
                    whileInView='visible'
                    variants={contentAnimation}
                    custom={1}
                >
                    <Logo className={style.svg_logo} />
                    <h3>Taycoon®</h3>
                </motion.div>
                <motion.span
                    initial='hidden'
                    whileInView='visible'
                    variants={contentAnimation}
                    custom={2}
                >{t('homePage.company.heading')} </motion.span>
                <Svg className={style.svg} />
            </div>
        </div>
    )
}

export default Company;
