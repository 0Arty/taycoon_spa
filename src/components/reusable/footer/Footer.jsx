import About from "./about/About";
import style from "./Footer.module.scss"
import Info from "./info/Info";
import Links from "./links/Links";

const Footer = ({ props }) => {

    return (
        <div className={style.box}>
            <div className={style.content}>
                <div className={style.wrapper}>
                    <Links />
                    <Info />
                    <About />

                </div>
                <div className={style.copyright}>
                    <span>© 2019 - {new Date().getFullYear()} taycoon.com.ua</span>
                </div>
            </div>
        </div>
    )
};

export default Footer;
