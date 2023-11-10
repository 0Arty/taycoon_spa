import style from "./ImageBlock.module.scss"
import Img from '../../../../assets/masterbatchpage/white.jpg'

const ImageBlock = ({ image, text, paragraph }) => {

    return (
        <div className={style.image_content} style={{backgroundImage: `url(${image})`}}>
            <div className = {style.image} >
                <h4>{text}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    )
};

export default ImageBlock;
