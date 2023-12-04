import { Link } from "react-router-dom";
import style from "./Guarantees.module.scss"
import { routes } from "../../../../../routes";

const Guarantees = ({ t, img, alt }) => {


    return (
        <div className={style.container}>
            <div className={style.text}>
                <p className = {style.paragraph}>
                    {t('aboutPage.info.guarantees1')}
                    <Link
                        className={style.link}
                        to={routes.CERTIFICATES}
                    > <span>ISO 9001:2015 </span>
                    </Link>
                    {t('aboutPage.info.guarantees2')}
                </p>
            </div>
            <div className={style.image}>
                <img src={img} alt={alt} />
            </div>
        </div>
    )
};

export default Guarantees;
