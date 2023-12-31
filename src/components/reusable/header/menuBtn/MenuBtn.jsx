import style from "./MenuBtn.module.scss"
import { useRef } from "react";
import classNames from 'classnames';


const MenuBtn = ({ isOpen, setIsOpen }) => {
    
    
    const btn = useRef(null)
    const openMenuhandler = () => {
        setIsOpen(prev => !prev)
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
