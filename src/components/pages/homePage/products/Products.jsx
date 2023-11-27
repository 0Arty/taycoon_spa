import style from "./Products.module.scss"
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { routes } from "../../../../routes";
import masterbatchImage from '../../../../assets/homepage/menu/masterbatch.png'
import netImage from '../../../../assets/homepage/menu/net.png'
import addivitiesImage from '../../../../assets/homepage/menu/addivites.jpg'
import compositesImage from '../../../../assets/homepage/menu/composites.png'
import { useState } from "react";
import { AnimatePresence} from "framer-motion";
import Product from "./Product";

const Products = ({ props }) => {

    const { t } = useTranslation()
    const navigate = useNavigate()
    const goToMasterbatchHandler = (e) => { navigate(routes.MASTERBATCH) }
    const goToNetHandler = (e) => { navigate(routes.PACKING_NET) }
    const goToAdditionhHandler = (e) => { navigate(routes.ADDITIVES) }
    const goToCompositesHandler = (e) => { navigate(routes.COMPOSITES) }
    const [master, setMaster] = useState(true)
    const [net, setNet] = useState(true)
    const [add, setAdd] = useState(true)
    const [compos, setCompos] = useState(true)


    const onHoverMousehandler = (number) => {
        if(window.innerWidth <= 768) return
        if (number !== 0) { setMaster(false) }
        if (number !== 1) { setNet(false) }
        if (number !== 2) { setAdd(false) }
        if (number !== 3) { setCompos(false) }
    }
    const onMouseLeave = () => {
        if(window.innerWidth <= 768) return
        setMaster(true)
        setNet(true)
        setAdd(true)
        setCompos(true)
    }

   

    return (
        <AnimatePresence >
            <div className={style.box}>
                <Product
                    text={t('homePage.products.masterbatch')}
                    image={masterbatchImage }
                    alt={ ''}
                    onHoverMousehandler={ onHoverMousehandler}
                    number={0 } onMouseLeave={onMouseLeave }
                    active={ master} 
                    goToHandler={goToMasterbatchHandler}
                    />
                <Product
                    text={t('homePage.products.net')}
                    image={ netImage}
                    alt={ ''}
                    onHoverMousehandler={ onHoverMousehandler}
                    number={ 1} onMouseLeave={onMouseLeave }
                    goToHandler={goToNetHandler}
                    active={ net} />
                <Product
                    text={t('homePage.products.addition')}
                    image={ addivitiesImage}
                    alt={'' }
                    onHoverMousehandler={onHoverMousehandler }
                    number={ 2} onMouseLeave={onMouseLeave }
                    goToHandler={goToAdditionhHandler}
                    active={ add} />
                <Product
                    text={t('homePage.products.composites')}
                    image={compositesImage }
                    alt={'' }
                    onHoverMousehandler={ onHoverMousehandler}
                    number={ 3} onMouseLeave={ onMouseLeave}
                    active={ compos} 
                    goToHandler={goToCompositesHandler}
                    />
                    
            </div>
        </AnimatePresence>
    )
};

export default Products;
