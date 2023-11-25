import style from './ClienUkr.module.scss'

import aplphaInterPlast from '../../../../assets/clients/ukr/aplpha-inter-plast.svg'
import atb from '../../../../assets/clients/ukr/atb.svg'
import goldPack from '../../../../assets/clients/ukr/gold-pack.svg'
import himeksi from '../../../../assets/clients/ukr/himeksi.svg'
import planetPlastic from '../../../../assets/clients/ukr/planet-plastic.svg'
import technok from '../../../../assets/clients/ukr/technok.svg'
import terraPack from '../../../../assets/clients/ukr/terra-pack.svg'
import ukr from '../../../../assets/clients/ukr/ukr.svg'

const ClientUkr = ({props}) => {

    const clientArray = [
        terraPack,goldPack,planetPlastic,technok,
        aplphaInterPlast, atb,himeksi,ukr
    ]
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

export default ClientUkr;
