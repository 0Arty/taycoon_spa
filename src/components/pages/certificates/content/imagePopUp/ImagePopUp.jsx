import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import style from "./ImagePopUp.module.scss"
import { useRef } from "react";
import { ReactComponent as ExpandSVG } from "../../../../../assets/certificates/expand.svg";
const ImagePopUp = ({ image, closePopUp }) => {


    const bgImageRef = useRef(null)
    const outsideClick = (e) => {
        if (!bgImageRef.current) return;
        if (!bgImageRef.current.contains(e.target)) {
            closePopUp(false)
        }
    }

    return (
        <div
            className={style.container}
            onClick={(e) => outsideClick(e)}
        >
            <div className={style.box} ref={bgImageRef}>
                <TransformWrapper
                    initialScale={1}
                    initialPositionX={0}
                    initialPositionY={0}
                >
                    {({ zoomIn, zoomOut, resetTransform}) => (
                        <div className={style.wrapper}>

                            <div className={style.closePopUp}>
                                <button onClick={() => closePopUp(false)}>x</button>
                            </div>
                            <div className={style.imageTools}>
                                <button onClick={() => zoomIn()} >+</button>
                                <button onClick={() => zoomOut()}>-</button>
                                <button onClick={() => resetTransform()}><ExpandSVG /></button>
                            </div>


                            <TransformComponent>
                                <img src={image} alt="1" className={style.image} />
                            </TransformComponent>
                        </div>
                    )}
                </TransformWrapper>




            </div>
        </div>
    )
};

export default ImagePopUp;
