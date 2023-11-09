import BackArrow from "../../../reusable/backArrow/BackArrow";
import style from "./Menu.module.scss"

const Menu = ({ props }) => {

    return (
        <div className={style.box}>
                <h3>Барвники для полімерів</h3>
                <div className = {style.arrow}>
                    <BackArrow /> 
                </div>
                <div className = {style.btns}>
                    <h4>Білі</h4>
                    <h4>Чорні</h4>
                    <h4>Кольорові</h4>
                </div>
        </div>
    )
};

export default Menu;
