import style from "./ClientEuro.module.scss"

import algol from '../../../../assets/clients/euro/algol.svg'
import arkema from '../../../../assets/clients/euro/arkema.svg'
import ataman from '../../../../assets/clients/euro/ataman.svg'
import cabot from '../../../../assets/clients/euro/cabot.svg'

const ClientEuro = ({ props }) => {

    const clientArray = [ algol, cabot, ataman, arkema] 

    return (
        <div className={style.container}>
            {clientArray.map((svg, index) => {
                return (
                    <div className={style.box} key={index}>
                        <img src={svg} alt="" className={style.image} />
                    </div>
                )
            })}
        </div>
    )
};

export default ClientEuro;
