import style from "./Info.module.scss"
import { useTranslation } from "react-i18next";

const Info = ({props}) => {
const {t} = useTranslation()
  return (
    <div className = {style.box}>
        <h5>officetaycoon@gmail.com</h5>
        <h5>+38 067 371-48-45</h5>
        <h5>+38 067 401-60-52</h5>
        <h5>+38 097 170-96-00</h5>
        <h5>{t('footer.info.addres')}</h5>
    </div>
  )
};

export default Info;
