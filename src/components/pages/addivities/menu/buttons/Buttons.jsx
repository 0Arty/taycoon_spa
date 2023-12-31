import { useTranslation } from "react-i18next";
import style from "./Buttons.module.scss"
import { useSelector } from "react-redux";

const Buttons = ({ refs, toHandle }) => {

    const { t } = useTranslation()
    const refsArray = Object.values(refs)
    const addivitiesArray = Object.values(useSelector(store => store.addivitiesSlice.addivities))

    return (
        <div className={style.btns}>
            {
                addivitiesArray.map(
                    (add, index) => <button
                        onClick={() => toHandle(refsArray[index])}
                        key={add.name}
                    > {t(`addPage.buttons.${index}`)}</button>
                )
            }
        </div>
    )
};

export default Buttons;
