import MenuComponent from "../../reusable/menu/MenuComponent";
import style from "./Clients.module.scss"
import image from '../../../assets/clients/main.png'
import Footer from "../../reusable/footer/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import ClientUkr from "./clientsComponent/ClientUkr";
import ClientEuro from "./clientsComponent/ClientEuro";
import { Helmet } from "react-helmet";



const Clients = ({ props }) => {

    const { t } = useTranslation()
    const refPage = useRef(null)
    useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])



    return (
        <div className={style.box} ref={refPage}>
            <Helmet >
                <meta charSet="utf-8"></meta>
                <title> {t('helmet.clients')} </title>
            </Helmet>
            <MenuComponent image={image} alt={''} heading={'Taycoon'} title={t('clients.title')} />
            <div className={style.content}>
                <h4 className={style.ukraninanParters}>{t('clients.ukr')}</h4>
                <ClientUkr />
                <h4 className={style.euroParters}>{t('clients.euro')}</h4>
                <ClientEuro />
            </div>
            <Footer />
        </div>
    )
};

export default Clients;