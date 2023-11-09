import { useNavigate } from "react-router-dom";
import style from "./BackArrow.module.scss"

const BackArrow = ({ props }) => {

    const navigate = useNavigate()
    const goToMainHandler = (e) => {
        navigate('/')
    }

    return (
        <svg className={style.arrow} xmlns="http://www.w3.org/2000/svg" width="83" height="38" viewBox="0 0 83 38" onClick={(e)=>{goToMainHandler(e)}}>
            <path d="M1.23223 17.2322C0.25592 18.2085 0.25592 19.7915 1.23223 20.7678L17.1421 36.6777C18.1184 37.654 19.7014 37.654 20.6777 36.6777C21.654 35.7014 21.654 34.1184 20.6777 33.1421L6.53554 19L20.6777 4.85786C21.654 3.88155 21.654 2.29864 20.6777 1.32233C19.7014 0.34602 18.1184 0.34602 17.1421 1.32233L1.23223 17.2322ZM83 16.5L3 16.5V21.5L83 21.5V16.5Z" />
        </svg>
    )
};

export default BackArrow;
