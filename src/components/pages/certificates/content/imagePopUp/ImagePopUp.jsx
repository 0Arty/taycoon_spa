import style from "./ImagePopUp.module.scss"

const ImagePopUp = ({ image, closePopUp }) => {

    return (
            <div
                className={style.container}
                onClick={() => { closePopUp(false) }}
            >
                <div className={style.box}>
                    <img src={image} alt="" className={style.image} />

                </div>
            </div>
    )
};

export default ImagePopUp;
