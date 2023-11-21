import { useDispatch } from "react-redux";
import style from "./Article.module.scss"
import { openPopUp } from "../../../../../store/slices/addivitiesSlice";

const Article = ({ article, paragraph, heading,parameters }) => {

    const dispatch = useDispatch()
    const openPopUP = () => {
        dispatch(openPopUp({ name: heading, article,parameters }
        ))
    }
    

    return (
        <div className={style.box}>
            <button onClick={(e) => openPopUP()}>
                <span>{article}</span>
                <p> {paragraph}</p>
            </button>
        </div>
    )
};

export default Article;
