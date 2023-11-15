import style from "./Card.module.scss"

const Card = ({ heading, title, svg }) => {

    return (
        <div className = {style.box}>
            <h5>{heading}</h5>
            <p>{title}</p>
            <img src={svg} alt="" />
        </div>
    )
};

export default Card;
