import style from "./HomePage.module.scss"
import Cards from "./cards/Cards";
import Company from "./company/Company";
import Products from "./products/Products";

const HomePage = ({props}) => {

  return (
    <div className = {style.box}>
      <Products />
      <Company /> 
      <Cards />
    </div>
  )
};

export default HomePage;
