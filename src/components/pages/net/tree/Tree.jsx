import { forwardRef } from "react";
import style from "./Tree.module.scss"
import { useTranslation } from "react-i18next";
import image from '../../../../assets/net/tree.svg'
const Tree = ({props}, ref) => {

const {t} = useTranslation()

  return (
    <div className={style.box} ref={ref}>
      <div className={style.image}>
        <img src={image} alt="пакувальна сітка для овочів та фруктів" />
      </div>
      <div className={style.text}>
        <h4>{t('netPage.tree.heading')}</h4>
        <div className={style.paragraph}>
          <p>{t('netPage.tree.text1')}</p>
          <p>{t('netPage.tree.text2')}</p>
        </div>
      </div>
    </div>
  )
};

export default forwardRef(Tree);
