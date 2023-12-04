import { useTranslation } from "react-i18next";
import style from "./Toys.module.scss"
import image from '../../../../assets/net/toys.svg'
import { forwardRef } from "react";

const Toys = ({ props }, ref) => {
  const { t } = useTranslation()

  return (
    <div className={style.box} ref={ref}>
      <div className={style.image}>
        <img src={image} alt={t('alt.nets.toys')} />
      </div>
      <div className={style.text}>
        <h4>{t('netPage.toys.heading')}</h4>
        <div className={style.paragraph}>
          <p>{t('netPage.toys.text1')}</p>
          <p>{t('netPage.toys.text2')}</p>
        </div>
      </div>
    </div>
  )
};

export default forwardRef(Toys);
