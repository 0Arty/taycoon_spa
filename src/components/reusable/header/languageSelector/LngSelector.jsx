import style from "./LngSelector.module.scss"
import { ReactComponent as Selector } from "../../../../assets/header/Selector.svg"
import i18n from "../../../../i18n"
import { useState } from "react";
import i18next from "i18next";
import { LOCALS } from "../../../../i18n/constants";
import { AnimatePresence, motion } from "framer-motion";

const LngSelector = ({ props }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (

            
                <motion.div className={style.box}>
                    <div className={style.info} onClick={() => { setIsOpen(!isOpen) }}>
                        <p className={style.text}>
                            {i18n.language === LOCALS.EN ? 'en' : 'ua'}
                        </p>
                        <Selector className={style.svg} />
                    </div>
                    <AnimatePresence >
                    {isOpen &&(<motion.div className={style.Selector}
                        initial={{ opacity: 0, y: -20}}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{duration: 0.2}}
                  

                    >
                        {(i18n.language !== LOCALS.UK) &&
                            <div
                                className={style.languageBox}
                                onClick={() => {
                                    i18next.changeLanguage(LOCALS.UK)
                                    setIsOpen(false)
                                }}
                            >
                                <span>
                                    ua
                                </span>
                            </div>}

                        {(i18n.language !== LOCALS.EN) &&
                            <div
                                className={style.languageBox}
                                onClick={() => {
                                    i18next.changeLanguage(LOCALS.EN)
                                    setIsOpen(false)
                                }}
                            >
                                <span>
                                    en
                                </span>
                            </div>}
                    </motion.div>)}
                    </AnimatePresence>
                </motion.div>
            
    )
};

export default LngSelector;
