import style from "./TextBlock.module.scss"

const TextBlock = ({ t }) => {

    // const {t} = usetranslate()
    return (
        <div className={style.textBlock}>
            <p> {t('masterbatchPage.white.p1')} </p>
            <p> {t('masterbatchPage.white.p2')} </p>
        </div>
    )
};

export default TextBlock;
