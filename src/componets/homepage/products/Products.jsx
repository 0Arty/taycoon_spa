import classNames from "classnames";
import style from "./Products.module.scss"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = ({ props }) => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [position, setPosition] = useState(false)
    
    useEffect( ()=>{
        setHeight(window.screen.width)
        setWidth(window.screen.height)
    }, [(window.screen.width)]) 


    return (
        <div className={style.box}>
            <div className={classNames(style.element, style.mastebatch)}>
                <div className={style.bg_shadow}>
                    <Link className={style.link}><h2>Барвники для полімерів</h2></Link>
                </div>
            </div>
            <div className={classNames(style.element, style.net)}>
                <div className={style.bg_shadow}>
                    <Link className={style.link}><h2>Сітка екструдована</h2></Link>
                </div>
            </div>
            <div className={classNames(style.element, style.addivities)}>
                <div className={style.bg_shadow}>
                    <Link className={style.link}><h2>Добавки до полімерів</h2></Link>
                </div>
            </div>
            <div className={classNames(style.element, style.composites)}>
                <div className={style.bg_shadow}>
                    <Link className={style.link}><h2>Композити</h2></Link>
                </div>
            </div>

        </div>
    )
};

export default Products;
