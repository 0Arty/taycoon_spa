import Footer from "../../reusable/footer/Footer";
import style from "./Net.module.scss"
import Crimping from "./crimping/Crimping";
import Glass from "./glass/Glass";
import Menu from "./menu/Menu";
import Toys from "./toys/Toys";
import Vegetables from "./vegetables/Vegetables";

const Net = ({ props }) => {

    return (
        <div className={style.box}>
            <Menu />
            <Vegetables />
            <hr />
            <Crimping />
            <hr />
            <Toys />
            <hr />
            <Glass />
            <Footer/> 
        </div>
    )
};

export default Net;
