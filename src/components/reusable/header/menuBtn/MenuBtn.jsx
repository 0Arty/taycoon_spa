import style from "./MenuBtn.module.scss"
import { useRef } from "react";
import { useDispatch} from "react-redux";
import { setIsOpen } from "../../../../store/slices/headerSlice";
import classNames from 'classnames';


const MenuBtn = ({ isOpen }) => {
    
    
    const dispatch = useDispatch()
    const btn = useRef(null)
    const openMenuhandler = () => {
        dispatch(setIsOpen())
    }

    return (
        <div className={style.menu}>
            <div className={style.menu_wrapper}
                onClick={() => { openMenuhandler() }}
            >
                <div ref={btn}
                    className={classNames(style.hamburger_menu, { [style.animate]: isOpen })}>
                </div>
            </div>
        </div>
    )
};

export default MenuBtn;
