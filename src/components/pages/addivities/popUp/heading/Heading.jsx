import style from "./Heading.module.scss"

const Heading = ({t, closeHandler, article}) => {

    const close = () => closeHandler()


  return (
    <div className={style.heading}>
    <h5>
      {t(`addPage.${article}.heading`)}
    </h5>
    <button onClick={close }>X</button>
  </div>
  )
};

export default Heading;
