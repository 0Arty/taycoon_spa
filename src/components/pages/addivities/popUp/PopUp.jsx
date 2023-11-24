import style from "./PopUp.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../../../../store/slices/addivitiesSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Heading from "./heading/Heading";
import Table from "./table/Table";
import Article from "./article/Article";
import Paragraph from "./paragraph/Paragraph";

const PopUp = () => {

  const isOpen = useSelector(state => state.addivitiesSlice.popUp.isOpen)
  const article = useSelector(store => store.addivitiesSlice.popUp.article)
  const blockRef = useRef(null)

  const dispatch = useDispatch()

  const closePopUpHandler = () => { dispatch(closePopUp()) }
  const parameters = useSelector(state => state.addivitiesSlice.popUp.parameters)
  const OutsideClick = (e) => {
    if (!blockRef.current) return;
    if (!blockRef.current.contains(e.target)) closePopUpHandler()
  }

  const variableForAnimation = {
    init: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      backdropFilter: 'blur(2.5px)',
      backgroundColor: 'rgba(6, 65, 63, 0.80)',
    },
    exit: {
      opacity: 0,
    }
  }
  const { t } = useTranslation()
  return (
    <AnimatePresence >
      {isOpen && <motion.div className={style.background}
        variants={variableForAnimation}
        initial={'init'}
        animate={'animate'}
        exit={'exit'}
        transition={{ duration: 0.25 }}
        onClick={(e) => OutsideClick(e)}

      >
        <div className={style.container} ref={blockRef}>
          <Heading closeHandler={closePopUpHandler} article={article} t={t} />
          <Article article={article} />
          <Table article={article} t={t} parameters={parameters} />
          <Paragraph
            article={article}
            t={t}
            heading={t('addPage.popUp.usage')}
            paragraph={t(`addPage.${article}.paragraphs.usage`)}
          />
          <Paragraph
            article={article}
            t={t}
            heading={t('addPage.popUp.dosage')}
            paragraph={t(`addPage.${article}.paragraphs.dosage`)}
          />
          {parameters?.appearance &&
            <Paragraph
              article={article}
              t={t}
              heading={t('addPage.popUp.appearance')}
              paragraph={t(`addPage.${article}.paragraphs.appearance`)}
            />
          }
          <Paragraph
            article={article}
            t={t}
            heading={t('addPage.popUp.saving')}
            paragraph={t(`addPage.${article}.paragraphs.saving`)}
          />
        </div>
      </motion.div>}
    </AnimatePresence>
  )
};

export default PopUp;
