import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Black.module.scss"
import Img from '../../../../assets/masterbatchpage/dark.jpg'
import Table from "./tableBlock/Table";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import { ReactComponent as AbstractSVG } from '../../../../assets/Vector.svg'
import { motion } from "framer-motion";

const Black = ({ props }, ref) => {

  const { t } = useTranslation()

  const contentAnimation = {
    hidden: custom => ({
      x: custom.animationPosition * 10,
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
        custom={{ delay: 1, animationPosition: -30 }}
      >
        <ImageBlock
          image={Img}
          text={t('masterbatchPage.black.heading')}
          paragraph={t('masterbatchPage.black.subheading')}
          alt={t('alt.masterbatcPage.black')}
        />
      </motion.div>
      <motion.p
        className={style.subtext}
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation}
        custom={{ delay: 1, animationPosition: 30 }}
      >{t('masterbatchPage.black.p1')}</motion.p>

      <Table text={t('masterbatchPage.black.table.download')} />
      <AbstractSVG className={style.abbstractSVG} />
    </div>
  )
};

export default forwardRef(Black);
