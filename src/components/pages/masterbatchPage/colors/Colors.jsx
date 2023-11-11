import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Colors.module.scss"
import ColorImg from '../../../../assets/masterbatchpage/colors.jpg'

const Colors = ({props}) => {

  return (
    <div className = {style.box}>
      <ImageBlock image={ColorImg} text={'Кольорові барвники для полімерів'} paragraph={'Ми приносимо колір до полімеру, який може принести продукт до життя'}/>
    </div>
  )
};

export default Colors;
