import style from "./FooterForHomePage.module.scss"

const FooterForHomePage = ({ props }) => {

  return (
    <div className={style.box}>
      <span>© 2019 - {new Date().getFullYear()} taycoon.com.ua</span>
    </div>
  )
};

export default FooterForHomePage;
