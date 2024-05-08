import { Link } from "react-router-dom";
import style from "./NotFound.module.scss"
import { routes } from "../../../routes";
import {ReactComponent as BackGroundSVG} from '../../../assets/Vector.svg'
import { useTranslation } from "react-i18next";
const NotFound = ({ props }) => {

    const {t} = useTranslation()

    return (
        <div className={style.box}>
            <h2 className = {style.error}>Error 404</h2>
            <h3 className = {style.error_title}>{t('helmet.error404.notFound')}</h3>

            <Link to={routes.MAIN} className = {style.link}>
            {t('helmet.error404.to home page')}
            </Link>
            <BackGroundSVG className = {style.svg}/>
        </div>
    )
};

export default NotFound;
