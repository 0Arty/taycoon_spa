import style from "./Info.module.scss"
import { useTranslation } from "react-i18next";

import Right from "./right/Right";
import Left from "./left/Left";

import guarantees from '../../../../assets/about/guarantes.svg'
import factory from '../../../../assets/about/factory.svg'
import advantage from '../../../../assets/about/advantage.svg'
import lab from '../../../../assets/about/lab.svg'
import ukr from '../../../../assets/about/ukr.svg'


const Info = ({ props }) => {
    const { t } = useTranslation()

    return (
        <div className={style.box}>
            <Right
                text={t('aboutPage.info.guarantees')}
                img={guarantees}
                alt={t('aboutPage.img.guarantees')}
            />
            <Left
                text={t('aboutPage.info.factory')}
                img={factory}
                alt={t('aboutPage.img.factory')}
            />
            <Right
                text={t('aboutPage.info.advantage')}
                img={advantage}
                alt={t('aboutPage.img.advantage')}
            />
            <Left
                text={t('aboutPage.info.lab')}
                img={lab}
                alt={t('aboutPage.img.lab')}
            />
            <Right
                text={t('aboutPage.info.ukr')}
                img={ukr}
                alt={t('aboutPage.img.ukr')}
            />

        </div>
    )
};

export default Info;
