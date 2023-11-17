import style from "./Article.module.scss"

const Article = ({ article, paragraph,openPopUp, heading }) => {

    return (
        <div className={style.box}>
            <button onClick={(e)=>openPopUp(article,heading )}>
                <span>{article}</span>
                <p> {paragraph}</p>

            </button>

        </div>
    )
};

export default Article;
