import { useEffect, useRef } from "react";
import Footer from "../../reusable/footer/Footer";
import style from "./About.module.scss"
import Ecology from "./eco/Ecology";
import Info from "./info/Info";
import Menu from "./menu/Menu";

const About = ({ props }) => {

    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

    return (
        <div className={style.box} ref={refPage}>
            <Menu />
            <Info />
            <Ecology />
            <Footer />
        </div>
    )
};

export default About;
