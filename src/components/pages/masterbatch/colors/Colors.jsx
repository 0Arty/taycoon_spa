import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Colors.module.scss"
import ColorImg from '../../../../assets/masterbatchpage/colors.jpg'
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { forwardRef } from "react";
import {ReactComponent as AbstractSVG} from '../../../../assets/Vector.svg'

const Colors = ({props}, ref) => {

  const {t} = useTranslation()

  return (
    <div className = {style.box} ref={ref}>
      <ImageBlock image={ColorImg} text={t('masterbatchPage.colors.heading')} paragraph={t('masterbatchPage.colors.subheading')}/>
      <p className = {classNames(style.paragraph1, style.paragraph)}>{t('masterbatchPage.colors.p1')}</p>
      <p className = {classNames(style.paragraph2, style.paragraph)}>{t('masterbatchPage.colors.p2')}</p>
      <AbstractSVG  className = {style.AbstractSVG}/>
    </div>
  )
};

export default forwardRef(Colors);
