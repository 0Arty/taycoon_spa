import classNames from "classnames";
import style from "./Products.module.scss"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Products = ({ props }) => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [position, setPosition] = useState(false)

    useEffect(() => {
        setHeight(window.screen.width)
        setWidth(window.screen.height)
    }, [(window.screen.width)])

    const navigate = useNavigate()
    const goToMasterbatchHandler = (e) => {navigate('/masterbatch')}
    const goToNetHandler = (e) => {navigate('/masterbatch')}
    const goToAdditionhHandler = (e) => {navigate('/net')}
    const goToCompositesHandler = (e) => {navigate('/composites')}

    
    return (
        <div className={style.box}>
            <div className={classNames(style.element, style.mastebatch)}
                onClick={(e) => { goToMasterbatchHandler(e) }}>
                <Link className={style.link} to={'/masterbatch'}>
                    <h2>Барвники для полімерів</h2>
                </Link>
            </div>
            <div className={classNames(style.element, style.net)}>
                <Link className={style.link}><h2>Сітка екструдована</h2></Link>
            </div>
            <div className={classNames(style.element, style.addivities)}>
                <Link className={style.link}><h2>Добавки до полімерів</h2></Link>
            </div>
            <div className={classNames(style.element, style.composites)}>
                <Link className={style.link}><h2>Композити</h2></Link>
            </div>

        </div>
    )
};

export default Products;
