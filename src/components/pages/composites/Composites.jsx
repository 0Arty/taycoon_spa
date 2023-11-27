import style from "./Composites.module.scss"
import image from '../../../assets/homepage/menu/composites.png'
import { useTranslation } from "react-i18next";
import { ReactComponent as Download } from '../../../assets/masterbatchpage/pdfs/pdfLogo.svg'
import pdf from '../../../assets/composites/composites.pdf'
const Composites = ({ props }) => {

    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <div className={style.image}>
                <img src={image} alt='Композити' />
            </div>
            <div className={style.content}>
                <h3>{t('compositesPage.heading')}</h3>

                <h4>
                    {t('compositesPage.text')}
                </h4>
                <a href={pdf} target="_blank" rel="noreferrer">
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
