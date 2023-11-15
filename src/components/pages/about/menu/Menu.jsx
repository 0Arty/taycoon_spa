import style from "./Menu.module.scss"
import image from '../../../../assets/about/main.png'
import { useTranslation } from "react-i18next";

const Menu = ({props}) => {
const {t} = useTranslation()

  return (
    <div className = {style.box}>
      <img src={image} alt="" className = {style.image}/>
      <h3>Taycoon</h3>
      <h4>{t('aboutPage.subheading')}</h4>
    </div>
  )
};

export default Menu;
