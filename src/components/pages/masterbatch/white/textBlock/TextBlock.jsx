import { motion } from "framer-motion"
import style from "./TextBlock.module.scss"

const TextBlock = ({ t }) => {
    const contentAnimation = {
        imageBlock: {
          hidden: {
            x: 400,
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
        <div className={style.textBlock}>
            <motion.p
                    initial='hidden'
                    whileInView='visible'
                    variants={contentAnimation.imageBlock}
                    custom={0}
            
            > {t('masterbatchPage.white.p1')} </motion.p>
            <motion.p
                    initial='hidden'
                    whileInView='visible'
                    variants={contentAnimation.imageBlock}
                    custom={1}
            > {t('masterbatchPage.white.p2')} </motion.p>
        </div>
    )
};

export default TextBlock;
