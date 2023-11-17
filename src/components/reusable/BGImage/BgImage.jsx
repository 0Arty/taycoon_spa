import style from "./BgImage.module.scss"

const ImageComponent = ({ img, alt }) => {

    return (
        <div className={style.image}>
            <img src={img} alt={alt} />
        </div>
    )
};

export default ImageComponent;
