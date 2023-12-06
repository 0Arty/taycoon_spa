import { forwardRef, useEffect} from "react";
import FooterForHomePage from "./FooterForHomePage";
import style from "./HomePage.module.scss"
import Cards from "./cards/Cards";
import Company from "./company/Company";
import Contacts from "./contacts/Contacts";
import Info from "./info/Info";
import Products from "./products/Products";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const HomePage = ({ refContact}, ref) => {



  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  })
  const {t} = useTranslation()

  return (
    <div className={style.box} ref={ref}>
      <Helmet >
        <meta charSet="utf-8"></meta>
        <title> {t('helmet.home')} </title>
      </Helmet>

      <Products />
      <Company />
      <Cards />
      <Info />
      <Contacts ref={refContact} />
      <FooterForHomePage />

    </div>
  )
};

export default forwardRef(HomePage) ;
