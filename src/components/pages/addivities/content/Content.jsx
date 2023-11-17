import { useSelector } from "react-redux";
import style from "./Content.module.scss"
import Block from "./block/Block";
import { useTranslation } from "react-i18next";

const Content = ({ refs }) => {

    const addivities = Object.values(useSelector(store => store.addivitiesSlice.addivities))
    const refsArray = Object.values(refs)
    const { refBlock, refStatic, refUV, refOxi, refProc, refOpti, refClean, refFoam } = refs


    const openPopUpHandler = (article,heading) => {
        console.log(article,heading )
    }

    const { t } = useTranslation()
    return (
        <div className={style.container}>

            {
                addivities.map((add, index) => <div className={style.block} key={`divBlock${add.name}${index}`}> <Block
                    openPopUp={openPopUpHandler}
                    ref={refsArray[index]}
                    heading={t(`addPage.buttons.${index}`)}
                    articleArray={add.article}
                    key={`Block${add.name}${index}`} /></div>)
            }

        </div>
    )
};

export default Content;
