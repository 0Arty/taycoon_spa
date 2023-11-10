import { useRef } from "react";
import style from "./MasterbatchPage.module.scss"
import Menu from "./menu/Menu";
import White from "./white/White";
import Black from "./black/Black";

const MasterbatchPage = ({props}) => {

  const refWhite = useRef(null)
  const refBlack = useRef(null)
  
  const toWhite = () => {
    refWhite.current?.scrollIntoView({behavior: 'smooth'})
  }
  const toBlack = () => {
    refBlack.current?.scrollIntoView({behavior: 'smooth'})
  }
  
  return (
    <div className = {style.MasterbatchPage}>
        <Menu toWhite={toWhite} toBlack= {toBlack}/> 
        <White ref={refWhite}/>
        <Black ref={refBlack}/>

    </div>
  )
};

export default MasterbatchPage;
