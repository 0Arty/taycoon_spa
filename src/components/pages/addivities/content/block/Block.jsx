import { useTranslation } from "react-i18next";
import Article from "./Article";
import style from "./Block.module.scss"
import { forwardRef } from "react";

const Block = ({ articleArray, heading, openPopUp}, ref) => {

    const { t } = useTranslation()
    return (
        <div className={style.box} ref={ref}>
            <h4>{heading}</h4>
            <div className={style.articles}>
                {
                    articleArray.map((article, index) => <Article
                        heading={heading}
                        openPopUp={openPopUp }
                        article={article}
                        paragraph={t(`addPage.${article}.short`)}
                        key={`${article}${index}`} />)

                }
                {/* <Article /> */}
            </div>
        </div>
    )
};

export default forwardRef(Block);
