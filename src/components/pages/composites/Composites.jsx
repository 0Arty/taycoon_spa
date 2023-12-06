import style from "./Composites.module.scss"
import image from '../../../assets/homepage/menu/composites.png'

import i18n from "../../../i18n";
import { useTranslation } from "react-i18next";
import { LOCALS } from "../../../i18n/constants";

import { ReactComponent as Download } from '../../../assets/masterbatchpage/pdfs/pdfLogo.svg'
import pdf_ua from '../../../assets/composites/composites_ua.pdf'
import pdf_en from '../../../assets/composites/composites_en.pdf'
import { Helmet } from "react-helmet";

const Composites = ({ props }) => {

    const { t } = useTranslation()


    return (
        <div className={style.box}>
            <Helmet >
                <meta charSet="utf-8"></meta>
                <title> {t('helmet.composites')} </title>
            </Helmet>
            <div className={style.image}>
                <img src={image} alt='Композити' />
            </div>
            <div className={style.content}>
                <h3>{t('compositesPage.heading')}</h3>

                <h4>
                    {t('compositesPage.text')}
                </h4>
                <a href={i18n.language === LOCALS.EN ? pdf_en : pdf_ua} target="_blank" rel="noreferrer">
                    <button >

                        <span>{t('compositesPage.download')}</span>

                        <Download />

                    </button>
                </a>
            </div>

        </div>
    )
};


export default Composites;
