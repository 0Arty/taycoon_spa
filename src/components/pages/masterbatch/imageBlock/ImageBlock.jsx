import ImageComponent from "../../../reusable/BGImage/BgImage";
import style from "./ImageBlock.module.scss"

const ImageBlock = ({ image, text, paragraph, alt }) => {

    return (
        <div className={style.image_content}>
            <ImageComponent img={image} alt={alt}/> 
            <div className = {style.container} >
                <h4>{text}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    )
};

export default ImageBlock;
