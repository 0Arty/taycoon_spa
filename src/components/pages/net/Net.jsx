import { useRef } from "react";
import Footer from "../../reusable/footer/Footer";
import style from "./Net.module.scss"
import Crimping from "./crimping/Crimping";
import Glass from "./glass/Glass";
import Menu from "./menu/Menu";
import Toys from "./toys/Toys";
import Vegetables from "./vegetables/Vegetables";
import Cards from "./cards/Cards";

const Net = ({ props }) => {

    const refVegetable = useRef(null)
    const refCrimping = useRef(null)
    const refToys = useRef(null)
    const refGlass = useRef(null)

    const toVegetable = () => refVegetable.current?.scrollIntoView({block:'center', behavior: 'smooth' })
    const toCrimping = () => refCrimping.current?.scrollIntoView({block:'center', behavior: 'smooth' })
    const toToys = () => refToys.current?.scrollIntoView({block:'center', behavior: 'smooth' })
    const toGlass = () => refGlass.current?.scrollIntoView({block:'center', behavior: 'smooth' })

    const transition = {
        toVegetable,
        toCrimping,
        toToys,
        toGlass
    }

    return (
        <div className={style.box}>
            <Menu transition={transition}/>
            <Vegetables ref={refVegetable}/>
            <hr />
            <Crimping ref={refCrimping}/>
            <hr />
            <Toys ref={refToys}/>
            <hr />
            <Glass ref={refGlass}/>
            <Cards />
            <Footer />
        </div>
    )
};

export default Net;
