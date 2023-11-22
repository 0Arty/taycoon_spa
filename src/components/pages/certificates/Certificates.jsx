import MenuComponent from "../../reusable/menu/MenuComponent";
import style from "./Certificates.module.scss"
import image from '../../../assets/certificates/main.png'
import Footer from "../../reusable/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";



const Certificates = ({ props }) => {

    const { t } = useTranslation()
    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

    return (
        <div className={style.box} ref={refPage}>
            <MenuComponent image={image} alt={''} heading={'Taycoon'} title={t('certificates.title') } />
            <Footer />
        </div>
    )
};

export default Certificates;
