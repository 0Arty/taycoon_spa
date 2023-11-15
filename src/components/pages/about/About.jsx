import Footer from "../../reusable/footer/Footer";
import style from "./About.module.scss"
import Ecology from "./eco/Ecology";
import Info from "./info/Info";
import Menu from "./menu/Menu";

const About = ({ props }) => {

    return (
        <div className={style.box}>
            <Menu />
            <Info />
            <Ecology />
            <Footer />
        </div>
    )
};

export default About;
