import { useSelector } from "react-redux";
import style from "./Content.module.scss"
import Block from "./block/Block";
import { useTranslation } from "react-i18next";
import { ReactComponent as Vector } from "../../../../assets/addivities/Vector.svg";
const Content = ({ refs }) => {

    const addivities = Object.values(useSelector(store => store.addivitiesSlice.addivities))
    const refsArray = Object.values(refs)
    const { t } = useTranslation()

    console.log('rerender:')
    return (
        <div className={style.container}>
            {
                addivities.map((add, index) => <div className={style.block} key={`divBlock${add.name}${index}`}> <Block
                    ref={refsArray[index]}
                    heading={t(`addPage.buttons.${index}`)}
                    articleArray={add.article}
                    key={`Block${add.name}${index}`} /></div>)
            }
            <Vector className = {style.vector}/>
        </div>
    )
};

export default Content;
