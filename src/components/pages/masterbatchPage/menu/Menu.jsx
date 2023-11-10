import BackArrow from "../../../reusable/backArrow/BackArrow";
import style from "./Menu.module.scss"

const Menu = ({ toWhite, toBlack }) => {

    return (
        <div className={style.box}>
                <h3>Барвники для полімерів</h3>
                {/* <div className = {style.arrow}>
                    <BackArrow /> 
                </div> */}
                <div className = {style.btns}>
                    <button onClick={toWhite}>Білі</button>
                    <button onClick={toBlack}>Чорні</button>
                    <button onClick={()=>{}}>Кольорові</button>
                </div>
        </div>
    )
};

export default Menu;
