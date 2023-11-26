import { useTranslation } from "react-i18next";
import Article from "./Article";
import style from "./Block.module.scss"
import { forwardRef } from "react";

const Block = ({ articleArray, heading}, ref) => {
    const { t } = useTranslation()


    console.log('blockRerender:')

    return (
        <div className={style.box} ref={ref}>
            <h4>{heading}</h4>
            <div className={style.articles}>
                {
                    articleArray.map((article, index) => <Article
                        heading={heading}
                        article={article.name}
                        paragraph={t(`addPage.${article.name}.short`)}
                        parameters={article.parameters}
                        key={`${article}${index}`} />)
                }
            </div>
        </div>
    )
};

export default forwardRef(Block);