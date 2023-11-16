import style from "./MasterbatchPage.module.scss"

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Menu from "./menu/Menu";
import White from "./white/White";
import Black from "./black/Black";
import Colors from "./colors/Colors";
import Methods from "./methods/Methods";
import Footer from "../../reusable/footer/Footer";

const MasterbatchPage = ({ props }) => {

  const { t } = useTranslation()

  const refPage = useRef(null)
  const refWhite = useRef(null)
  const refBlack = useRef(null)
  const refColors = useRef(null)

  const toWhite = () => refWhite.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  const toBlack = () => refBlack.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  const toColors = () => refColors.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

  return (
    <div className={style.MasterbatchPage} ref={refPage}>
      <Menu toWhite={toWhite} toBlack={toBlack} toColors={toColors} />
      <Colors ref={refColors} />
      <White ref={refWhite} />
      <Black ref={refBlack} />
      <Methods />
      <div className={style.conclusion}>
        <p>
          {t('masterbatchPage.conclusion')}
        </p>
      </div>
      <Footer />
    </div>
  )
};

export default MasterbatchPage;
