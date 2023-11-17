import { useEffect, useRef } from "react";
import style from "./Addivities.module.scss"
import Menu from "./menu/Menu";
import Content from "./content/Content";
import PopUp from "./popUp/PopUp";
import { useSelector } from "react-redux";

const Addivities = ({ props }) => {

  const refPage = useRef(null)
  const refBlock = useRef(null)
  const refStatic = useRef(null)
  const refUV = useRef(null)
  const refOxi = useRef(null)
  const refProc = useRef(null)
  const refOpti = useRef(null)
  const refClean = useRef(null)
  const refFoam = useRef(null)
  const refs = { refBlock, refStatic, refUV, refOxi, refProc, refOpti, refClean, refFoam }

  useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])
  const popUpIsOpen = useSelector(store => store.addivitiesSlice.popUp.isOpen)
  
  const toHandle = (ref) => ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })

  return (
    <div className={style.box} ref={refPage}>
      <Menu refs={refs} toHandle={toHandle} />
      <Content refs={refs} />
          {
           popUpIsOpen && <PopUp />
          }
            
    </div>
  )
};

export default Addivities;
