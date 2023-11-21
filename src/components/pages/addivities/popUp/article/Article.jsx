import style from "./Article.module.scss"

const Article = ({ article }) => {

    return (
        <div className={style.container}>
            <hr className = {style.line1}/>
            <span>
                {article}
            </span>
            <hr className = {style.line2}/>
        </div>
    )
};

export default Article;
