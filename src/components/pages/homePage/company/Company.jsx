import style from "./Company.module.scss"
import { ReactComponent as Logo } from "../../../../assets/header/Logo.svg";
import { useTranslation } from "react-i18next";
import {ReactComponent as Svg} from '../../../../assets/Vector.svg'


const Company = ({ props }) => {

    const {t} = useTranslation()
    
    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <Logo className={style.svg_logo} />
                    <h3>Taycoon®</h3>
                </div>
                <span>{t('homePage.company.heading')} </span>
            <Svg className = {style.svg}/>
            </div>
        </div>
    )
}

export default Company;
