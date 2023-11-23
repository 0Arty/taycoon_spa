import { motion } from "framer-motion";
import style from "./Card.module.scss"

const Card = ({title, text, children}) => {

  return (
    <div className = {style.box}>
        
        <h4 className = {style.title}>{title}</h4>
        <p className = {style.text}>{text}</p>
        <div className = {style.svg}>
            {children}
        </div>
    </div>
  )
};

export default Card;
