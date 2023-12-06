import MenuComponent from "../../reusable/menu/MenuComponent";
import style from "./Certificates.module.scss"
import image from '../../../assets/certificates/main.png'
import Footer from "../../reusable/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import Content from "./content/Content";
import { Helmet } from "react-helmet";



const Certificates = ({ props }) => {

    const { t } = useTranslation()
    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

    return (
        <div className={style.box} ref={refPage}>
            <Helmet >
                <meta charSet="utf-8"></meta>
                <title> {t('helmet.certificates')} </title>
            </Helmet>
            <MenuComponent image={image} alt={''} heading={'Taycoon'} title={t('certificates.title')} />
            <Content />
            <Footer />
        </div>
    )
};

export default Certificates;
