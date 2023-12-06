import { useEffect, useRef } from "react";
import Footer from "../../reusable/footer/Footer";
import style from "./Net.module.scss"
import Crimping from "./crimping/Crimping";
import Glass from "./glass/Glass";
import Menu from "./menu/Menu";
import Toys from "./toys/Toys";
import Vegetables from "./vegetables/Vegetables";
import Cards from "./cards/Cards";
import Tree from "./tree/Tree";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const Net = ({ props }) => {

    const refPage = useRef(null)
    const refVegetable = useRef(null)
    const refCrimping = useRef(null)
    const refToys = useRef(null)
    const refGlass = useRef(null)
    const refTree = useRef(null)

    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])
    const toVegetable = () => refVegetable.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    const toCrimping = () => refCrimping.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    const toToys = () => refToys.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    const toGlass = () => refGlass.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    const toTree = () => refTree.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })

    const transition = {
        toVegetable,
        toCrimping,
        toToys,
        toGlass,
        toTree
    }
    const {t} = useTranslation()

    return (
        <div className={style.box} ref={refPage}>
            <Helmet >
                <meta charSet="utf-8"></meta>
                <title> {t('helmet.extruded net')} </title>
            </Helmet>
            <Menu transition={transition} />
            <Vegetables ref={refVegetable} />
            <hr />
            <Crimping ref={refCrimping} />
            <hr />
            <Toys ref={refToys} />
            <hr />
            <Glass ref={refGlass} />
            <Tree ref={refTree} />
            <Cards />
            <Footer />
        </div>
    )
};

export default Net;
