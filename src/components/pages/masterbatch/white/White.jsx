import style from "./White.module.scss"
import WhiteIMG from "../../../../assets/masterbatchpage/white.jpg";
import { forwardRef } from "react";
import TextBlock from "./textBlock/TextBlock";
import TableBlock from "./tableBlock/TableBlock";
import ImageBlock from "../imageBlock/ImageBlock";
import { useTranslation } from "react-i18next";
import { ReactComponent as AbstractSVG } from '../../../../assets/Vector.svg'
import { motion } from "framer-motion";

const White = ({ props }, ref) => {

  const { t } = useTranslation()
  const contentAnimation = {
    imageBlock: {
      hidden: {
        x: -300,
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
    },
    paragraph: {
      hidden: {
        x: 200,
        opacity: 0,
      },
      visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.1,
          duration: 0.3
        }
      }),
    }
  }


  return (
    <div className={style.box} ref={ref}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation.imageBlock}
        custom={0}
      >
      <ImageBlock
        image={WhiteIMG}
        text={t('masterbatchPage.white.heading')}
        alt={t('alt.masterbatcPage.white')}
      />
      </motion.div>
      <TextBlock t={t} />
      <TableBlock />
      <motion.p className={style.addition}
        initial='hidden'
        whileInView='visible'
        variants={contentAnimation.paragraph}
        custom={1}

      >
        {t('masterbatchPage.white.text')}
      </motion.p>
      <AbstractSVG className={style.abbstractSVG} />
    </div>
  )
};

export default forwardRef(White);

