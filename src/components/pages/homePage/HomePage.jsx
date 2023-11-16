import { useEffect, useRef } from "react";
import FooterForHomePage from "./FooterForHomePage";
import style from "./HomePage.module.scss"
import Cards from "./cards/Cards";
import Company from "./company/Company";
import Contacts from "./contacts/Contacts";
import Info from "./info/Info";
import Products from "./products/Products";

const HomePage = ({ refContact }, ) => {

  const ref = useRef(null)

  useEffect(() => {
    ref.current?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }, [])

  return (
    <div className={style.box} ref={ref}>
      <Products />
      <Company />
      <Cards />
      <Info />
      <Contacts ref={refContact} />
      <FooterForHomePage />

    </div>
  )
};

export default HomePage;
