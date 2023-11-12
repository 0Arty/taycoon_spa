import { useTranslation } from "react-i18next";
import style from "./Links.module.scss"
import { Link } from "react-router-dom";
import { routes } from "../../../../routes";

const Links = ({ props }) => {

    const { t } = useTranslation()
    
    return (

        <div className={style.box}>
            <h5>
                <Link to={routes.MASTERBATCH} className={style.link}>
                    {
                        t('footer.links.masterbatch')
                    }
                </Link>
            </h5>
            <h5>
                <Link to={routes.PACKING_NET} className={style.link}>
                    {
                       t('footer.links.net')
                    }
                </Link>
            </h5>
            <h5>
                <Link to={routes.ADDITIVES} className={style.link}>
                    {
                       t('footer.links.addtions')
                    }
                </Link>
            </h5>
            <h5>
                <Link to={routes.COMPOSITES} className={style.link}>
                    {
                         t('footer.links.composites')
                    }
                </Link>
            </h5>
        </div>
    )
};

export default Links;
