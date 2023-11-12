import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Black.module.scss"
import Img from '../../../../assets/masterbatchpage/dark.jpg'
import Table from "./tableBlock/Table";
import { forwardRef } from "react";
import { useTranslation } from "react-i18next";
import {ReactComponent as AbstractSVG} from '../../../../assets/Vector.svg'

const Black = ({props}, ref) => {

  const {t} = useTranslation()

  return (
    <div className = {style.box} ref={ref}>
        <ImageBlock image={Img} text={t('masterbatchPage.black.heading')} paragraph={t('masterbatchPage.black.subheading')}/>
        <p className = {style.subtext}>{t('masterbatchPage.black.p1')}</p>
        <Table text={t('masterbatchPage.black.table.download')}/>
        <AbstractSVG className = {style.abbstractSVG}/> 
    </div>
  )
};

export default forwardRef(Black);
