import style from "./TextBlock.module.scss"

const TextBlock = ({ props }) => {

    return (
        <div className={style.textBlock}>
            <p> – це високонаповнений білий суперконцентрат розроблений для наповнення високоякісних плівок ливарних та екструзійних виробів </p>
            <p> Підходить для застосування у пластмасових виробах що контактують із продуктами харчування</p>
        </div>
    )
};

export default TextBlock;
