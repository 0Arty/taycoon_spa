import style from "./BusinessCard.module.scss"
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Email from "./Email";
import Address from "./Address";
import Tel from "./Tel";
import { motion } from "framer-motion";

const BusinessCard = ({ props }) => {

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
    <div className = {style.container}>
      
      <motion.div className = {classNames(style.card, style.email)}
                        initial='hidden'
                        whileInView='visible'
                        variants={contentAnimation}
                        custom={1}
      >
        <Email t={t}/>
      </motion.div>
      <motion.div className = {classNames(style.card, style.addres)}
                        initial='hidden'
                        whileInView='visible'
                        variants={contentAnimation}
                        custom={1}
      >
        <Address t={t}/>
      </motion.div>
      <motion.div className = {classNames(style.card, style.tel)}
                        initial='hidden'
                        whileInView='visible'
                        variants={contentAnimation}
                        custom={1}
      >
        <Tel t={t}/>
      </motion.div>
    </div>  )
};

export default BusinessCard;
