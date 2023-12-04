import style from "./Card.module.scss"

const Card = ({ heading, text }) => {
    return (
        <div className={style.wrapper}>
            <h5>{heading}</h5>
            <p>{text}</p>
        </div>
    )
};

export default Card;
