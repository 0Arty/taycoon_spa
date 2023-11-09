import FooterForHomePage from "./FooterForHomePage";
import style from "./HomePage.module.scss"
import Cards from "./cards/Cards";
import Company from "./company/Company";
import Contacts from "./contacts/Contacts";
import Info from "./info/Info";
import Products from "./products/Products";

const HomePage = ({props}) => {

  return (
    <div className = {style.box}>
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
