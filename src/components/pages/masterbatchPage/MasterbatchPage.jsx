import { useRef } from "react";
import style from "./MasterbatchPage.module.scss"
import Menu from "./menu/Menu";
import White from "./white/White";
import Black from "./black/Black";
import Colors from "./colors/Colors";
import Methods from "./methods/Methods";
import { useTranslation } from "react-i18next";
import Footer from "../../reusable/footer/Footer";


const MasterbatchPage = ({ props }) => {

  const refWhite = useRef(null)
  const refBlack = useRef(null)
  const refColors = useRef(null)

  const toWhite = () => {
    refWhite.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const toBlack = () => {
    refBlack.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const toColors = () => {
    refColors.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const { t } = useTranslation()
  return (
    <div className={style.MasterbatchPage}>
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
