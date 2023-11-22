import ImageComponent from "../BGImage/BgImage";
import style from "./MenuComponent.module.scss"

const MenuComponent = ({ image, alt, heading, title }) => {

    return (
        <div className={style.box}>
            <ImageComponent img={image} alt={alt} />
            <div className = {style.container}>
            <h3>{heading}</h3>
            <h4>{title}</h4>
            </div>
        </div>
    )
};
export default MenuComponent;

