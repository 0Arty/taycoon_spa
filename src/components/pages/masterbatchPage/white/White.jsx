import style from "./White.module.scss"
import WhiteIMG from "../../../../assets/masterbatchpage/white.jpg";
import { forwardRef } from "react";
import TextBlock from "./textBlock/TextBlock";
import TableBlock from "./tableBlock/TableBlock";
import ImageBlock from "../imageBlock/ImageBlock";
import { useTranslation } from "react-i18next";
import {ReactComponent as AbstractSVG} from '../../../../assets/Vector.svg'

const White = ({ props }, ref) => {

  const { t } = useTranslation()

  return (

    <div className={style.box} ref={ref}>
      <ImageBlock
        image={WhiteIMG}
        text={t('masterbatchPage.white.heading')}
        paragraph={t('masterbatchPage.white.subheading')} />
      <TextBlock t = {t}/>
      <TableBlock />
      <p className={style.addition}>
        {t('masterbatchPage.white.text')}
      </p>
      <p className={style.conclusion}>
        {t('masterbatchPage.white.conclusion')}
      </p>
        <AbstractSVG className = {style.abbstractSVG}/> 
    </div>
  )
};

export default forwardRef(White);

