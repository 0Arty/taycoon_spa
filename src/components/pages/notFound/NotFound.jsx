import { Link } from "react-router-dom";
import style from "./NotFound.module.scss"
import { routes } from "../../../routes";
import {ReactComponent as BackGroundSVG} from '../../../assets/Vector.svg'
const NotFound = ({ props }) => {

    return (
        <div className={style.box}>
            <h2 className = {style.error}>Error 404</h2>
            <h3 className = {style.error_title}>Сторінка не знайдена</h3>

            <Link to={routes.MAIN} className = {style.link}>
                    на головну
            </Link>
            <BackGroundSVG className = {style.svg}/>
        </div>
    )
};

export default NotFound;
