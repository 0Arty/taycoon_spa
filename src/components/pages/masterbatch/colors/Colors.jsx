import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Colors.module.scss"
import ColorImg from '../../../../assets/masterbatchpage/colors.jpg'
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { forwardRef } from "react";
import { ReactComponent as AbstractSVG } from '../../../../assets/Vector.svg'
import { motion } from "framer-motion";

const Colors = ({ props }, ref) => {

  const { t } = useTranslation()
  const contentAnimation = {
    hidden: custom => ({
      x: custom.startPosition * 10,
      opacity: 0,
    }),
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: custom.delay * 0.2,
        duration: 0.3
      }
    }),
  }

  return (
    <div className={style.box} ref={ref}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation}
        custom={{ delay: 1, startPosition: -40 }}
      >
        <ImageBlock image={ColorImg} text={t('masterbatchPage.colors.heading')} paragraph={t('masterbatchPage.colors.subheading')} />
      </motion.div>

      <motion.p className={classNames(style.paragraph1, style.paragraph)}
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation}
        custom={{ delay: 1, startPosition: 40 }}
      >{t('masterbatchPage.colors.p1')}</motion.p>

      <motion.p className={classNames(style.paragraph2, style.paragraph)}
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation}
        custom={{ delay: 2, startPosition: -40 }}
      >{t('masterbatchPage.colors.p2')}</motion.p>

      <AbstractSVG className={style.AbstractSVG} />
    </div>
  )
};

export default forwardRef(Colors);
