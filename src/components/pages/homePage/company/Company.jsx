import style from "./Company.module.scss"
import { ReactComponent as Logo } from "../../../../assets/header/Logo.svg";



const Company = ({ props }) => {

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <div className={style.heading}>
                    <Logo className={style.svg_logo} />
                    <h3>Taycoon®</h3>
                </div>
                <span>Ви ставите завдання – ми його вирішуємо! </span>
            </div>
        </div>
    )
}

export default Company;
