import { useTranslation } from "react-i18next";
import style from "./TextBlock.module.scss"

const TextBlock = ({props}) => {

    const {t} = useTranslation()
  return (
    <div className = {style.box}>
      <p>{t('addPage.text1')}</p>
      <p>{t('addPage.text2')}</p>
    </div>
  )
};

export default TextBlock;
