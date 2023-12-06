import { useEffect, useRef } from "react";
import Footer from "../../reusable/footer/Footer";
import style from "./About.module.scss"
import Ecology from "./eco/Ecology";
import Info from "./info/Info";
import MenuComponent from "../../reusable/menu/MenuComponent";
import image from '../../../assets/about/main.png'
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const About = ({ props }) => {

    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])
    const { t } = useTranslation()

    return (
        <div className={style.box} ref={refPage}>
            <Helmet >
                <meta charSet="utf-8"></meta>
                <title> {t('helmet.about')} </title>
            </Helmet>
            <MenuComponent image={image} alt={t('alt.about.main')} heading={'Taycoon'} title={t('aboutPage.subheading')} />
            <Info />
            <Ecology />
            <Footer />
        </div>
    )
};

export default About;
