import style from "./PopUp.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { closePopUp } from "../../../../store/slices/addivitiesSlice";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import Heading from "./heading/Heading";
import Table from "./table/Table";

const PopUp = () => {

  const isOpen = useSelector(state => state.addivitiesSlice.popUp.isOpen)
  const article = useSelector(store => store.addivitiesSlice.popUp.article)
  const blockRef = useRef(null)

  const dispatch = useDispatch()

  const closePopUpHandler = () => { dispatch(closePopUp()) }

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
  // if (!isOpen) return null
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
          <Table article={article} t={t} />

          {article}
        </div>
      </motion.div>}
    </AnimatePresence>
  )
};

export default PopUp;
