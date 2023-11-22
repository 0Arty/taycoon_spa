import MenuComponent from "../../reusable/menu/MenuComponent";
import style from "./Clients.module.scss"
import image from '../../../assets/clients/main.png'
import Footer from "../../reusable/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";


const Clients = ({ props }) => {

    const {t} = useTranslation()
    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

    return (
        <div className={style.box}>
            <MenuComponent image={image} alt={''} heading={'Taycoon'} title={t('clients.title')} />

            <Footer />
        </div>
    )
};

export default Clients;