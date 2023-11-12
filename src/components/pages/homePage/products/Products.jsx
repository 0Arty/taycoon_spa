import classNames from "classnames";
import style from "./Products.module.scss"
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../../../routes";


const Products = ({ props }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()
    const goToMasterbatchHandler = (e) => { navigate('/masterbatch') }
    // const goToNetHandler = (e) => {navigate('/masterbatch')}
    // const goToAdditionhHandler = (e) => {navigate('/net')}
    // const goToCompositesHandler = (e) => {navigate('/composites')}


    return (
        <div className={style.box}>
            <div
                className={classNames(style.element, style.mastebatch)}
                onClick={(e) => { goToMasterbatchHandler(e) }}
            >
                <Link className={style.link}
                    to={routes.MASTERBATCH}>
                    <h2>
                        {t('homePage.products.masterbatch')}
                    </h2>
                </Link>
            </div>
            <div
                className={classNames(style.element, style.net)}
            >
                <Link className={style.link}
                    to={routes.PACKING_NET}
                >
                    <h2>
                        {t('homePage.products.net')}
                    </h2>
                </Link>
            </div>
            <div
                className={classNames(style.element, style.addivities)}
            >
                <Link className={style.link}
                    to={routes.ADDITIVES}
                >
                    <h2>
                        {t('homePage.products.addition')}
                    </h2>
                </Link>
            </div>
            <div
                className={classNames(style.element, style.composites)}
            >
                <Link
                    className={style.link}
                    to={routes.COMPOSITES}
                    >
                    <h2>
                        {t('homePage.products.composites')}
                    </h2>
                </Link>
            </div>

        </div>
    )
};

export default Products;
