import { useTranslation } from "react-i18next";
import style from "./Buttons.module.scss"
import { useSelector } from "react-redux";

const Buttons = ({ refs, toHandle }) => {

    const { t } = useTranslation()
    const { refBlock, refStatic, refUV, refOxi, refProc, refOpti, refClean, refFoam } = refs

    const refsArray = Object.values(refs)
    const addivitiesArray = Object.values(useSelector(store => store.addivitiesSlice.addivities))

    return (
        <div className={style.btns}>
            <div>
                {
                    addivitiesArray.map(
                        (add, index) => <button
                            onClick={() => toHandle(refsArray[index])}
                        > {t(`addPage.buttons.${index}`)}</button>
                    )
                }
            </div>
        </div>
    )
};

export default Buttons;
