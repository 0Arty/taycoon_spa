import style from "./LngSelector.module.scss"
import { ReactComponent as Selector } from "../../../../assets/header/Selector.svg"
import i18n from "../../../../i18n"
import { useState } from "react";
import classNames from "classnames";
import i18next from "i18next";
import { LOCALS } from "../../../../i18n/constants";

const LngSelector = ({ props }) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <div className={style.wrapper} onClick={() => { setIsOpen(!isOpen) }}>
                <div className={style.btn}>
                    <div className={style.text}> {i18n.language} </div>
                    <Selector />

                </div>
                <div className={style.languages}>
                    {(i18n.language !== LOCALS.UK) &&
                        <div className={classNames(style.lng, { [style.animate]: isOpen })}
                            onClick={() => { i18next.changeLanguage(LOCALS.UK) }}
                        > uk</div>}

                    {(i18n.language !== LOCALS.EN) &&
                        <div
                            className={classNames(style.lng, { [style.animate]: isOpen })}
                            onClick={() => { i18next.changeLanguage(LOCALS.EN) }}
                        >en</div>}
                </div>
            </div>

            <div className={classNames(style.close, { [style.closeAnimate]: isOpen })} onClick={() => { setIsOpen(!isOpen) }} onWheel={() => { setIsOpen(!isOpen) }}>
            </div>
        </>
    )
};

export default LngSelector;
