import { useEffect, useRef } from "react";
import style from "./Addivities.module.scss"
import Menu from "./menu/Menu";
import Content from "./content/Content";
import PopUp from "./popUp/PopUp";
import Footer from "../../reusable/footer/Footer";
import TextBlock from "./text/TextBlock";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";


const Addivities = ({ props }) => {

  const refPage = useRef(null)
  const refBlock = useRef(null)
  const refStatic = useRef(null)
  const refUV = useRef(null)
  const refOxi = useRef(null)
  const refProc = useRef(null)
  const refOpti = useRef(null)
  const refClean = useRef(null)
  const refFoam = useRef(null)
  const refs = { refBlock, refStatic, refUV, refOxi, refProc, refOpti, refClean, refFoam }

  useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])
  const toHandle = (ref) => ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })
  const { t } = useTranslation()
  return (
    <div className={style.box} ref={refPage}>
      <Helmet >
        <meta charSet="utf-8"></meta>
        <title> {t('helmet.addivities')} </title>
      </Helmet>
      <Menu refs={refs} toHandle={toHandle} />
      <Content refs={refs} />
      <PopUp />
      <TextBlock />
      <Footer />

    </div>
  )
};

export default Addivities;
