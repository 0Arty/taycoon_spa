import style from "./Contacts.module.scss"
import BusinessCard from "./businesCard/BusinessCard";
import { ReactComponent as ContacSVG } from '../../../assets/homepage/g8.svg'

const Contacts = ({ props }) => {

    return (
        <div className={style.box}>
            <div className={style.wrapper}>
                <h3>Як з нами зв'язатись </h3>
                <BusinessCard />
                <div className={style.svg}>
                    <ContacSVG />
                </div>
            </div>

        </div>
    )
};

export default Contacts;
