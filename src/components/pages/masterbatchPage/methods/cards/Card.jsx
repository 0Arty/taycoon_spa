import style from "./Card.module.scss"

const Card = ({ heading, text }) => {

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <h5>{heading}</h5>
                <p>{text}</p>
            </div>
        </div>

    )
};

export default Card;
