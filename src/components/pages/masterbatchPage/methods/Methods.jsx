import { useTranslation } from "react-i18next";
import style from "./Methods.module.scss"
import Cards from "./cards/Cards";
import { ReactComponent as Upper } from "../../../../assets/masterbatchpage/svg/upper.svg";
import { ReactComponent as Down } from "../../../../assets/masterbatchpage/svg/down.svg";
import { ReactComponent as Vector1 } from "../../../../assets/masterbatchpage/svg/vector1.svg";
import { ReactComponent as Vector2 } from "../../../../assets/masterbatchpage/svg/vector2.svg";

const Methods = ({ props }) => {

    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <div className={style.wrapper}>

                <h4>{t('masterbatchPage.methods.heading')}</h4>
                <Cards />
                <Upper className={style.upper} />
                <Down className={style.down} />
                <Vector1 className={style.vector1} />
                <Vector2 className={style.vector2} />

            </div>
        </div>
    )
};

export default Methods;
