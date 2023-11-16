import { useRef } from "react";
import style from "./Addivities.module.scss"
import Menu from "./menu/Menu";

const Addivities = ({props}) => {

const refBlock = useRef(null)
const refStatic = useRef(null)
const refUV = useRef(null)
const refOxi = useRef(null)
const refProc = useRef(null)
const refOpti = useRef(null)
const refClean = useRef(null)
const refFoam = useRef(null)

const refs = {refBlock, refStatic, refUV, refOxi, refProc, refOpti, refClean, refFoam}

// useEffect(() => refPage.current?.scrollIntoView({ block: 'start', behavior: 'smooth' }), [])

const toHandle = (ref) => ref.current?.scrollIntoView({ block: 'center', behavior: 'smooth' })

return (
    <div className = {style.box}>
      <Menu refs={refs} toHandle={toHandle}/>
      <div ref={refBlock} className = {style.sds}></div>

    </div>
  )
};

export default Addivities;
