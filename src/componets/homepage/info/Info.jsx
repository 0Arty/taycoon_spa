import style from "./Info.module.scss"
import InfoCard from "./infocard/InfoCard";

const Info = ({ props }) => {


    const firstP = 'Приватне підприємство "Тайкун" вже більше 25 років – надійний та кваліфікований виробник високоякісних технологічних добавок, композитів, чорних і кольорових суперконцентратів...'
    const handlerLink = () => { }
    return (
        <div className={style.box}>
            <h3>Про нашу компанію</h3>
            <div className={style.card_container}>
                {/* title, info, onClick */}
                <InfoCard title={'Про компанію'} info={firstP} onClick={handlerLink} readMore={'Читати Більше'}/>
                <InfoCard title={'Сертифікати'} onClick={handlerLink} readMore={'Читати Більше'}/>
                <InfoCard title={'Про компанію'} info={firstP} onClick={handlerLink} readMore={'Читати Більше'}/>
            </div>
        </div>
    )
};

export default Info;
