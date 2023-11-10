import ImageBlock from "../imageBlock/ImageBlock";
import style from "./Black.module.scss"
import Img from '../../../../assets/masterbatchpage/dark.jpg'
import Table from "./tableBlock/Table";
import { forwardRef } from "react";
const Black = ({props}, ref) => {

  return (
    <div className = {style.box} ref={ref}>
        <ImageBlock image={Img} text={'Чорні барвники для полімерів'} paragraph={'Поліолефінова група'}/>
        <p className = {style.subtext}> Чорний барвник - концентрат чорного пігменту в полімерній матриці з різним відсотковим вмістом пігменту від 20% до 50% (дрібнодисперсної сажі)</p>
        <Table />
    
    </div>
  )
};

export default forwardRef(Black);
