import { useEffect, useRef } from "react";
import FooterForHomePage from "./FooterForHomePage";
import style from "./HomePage.module.scss"
import Cards from "./cards/Cards";
import Company from "./company/Company";
import Contacts from "./contacts/Contacts";
import Info from "./info/Info";
import Products from "./products/Products";
import { useDispatch, useSelector } from "react-redux";

const HomePage = ({props}) => {

  const ref = useRef(null)

  useEffect(()=>{
    ref.current?.scrollIntoView({block:'start', behavior: 'smooth' })
    console.log('sd')
  }, [])

  return (
    <div className = {style.box} ref={ref}>
      <Products />
      <Company /> 
      <Cards />
      <Info />
      <Contacts />
      <FooterForHomePage />

    </div>
  )
};

export default HomePage;
