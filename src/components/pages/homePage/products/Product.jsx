import { motion } from "framer-motion"
import style from "./Product.module.scss"
import { useEffect, useState } from "react";

const Product = ({ text, image, alt, onHoverMousehandler, number, onMouseLeave, active, goToHandler }) => {

    const [animationParametrs, setAnimationParametrs] = useState({})

    useEffect(() => {
        if(window.innerWidth <= 768) return
        if (window.innerWidth >= 1120) {setAnimationParametrs({fontSize : '36px'})}
        else if (window.innerWidth < 1120 && window.innerWidth >= 800){setAnimationParametrs({fontSize : '18px'})}
        else if (window.innerWidth < 800 ){setAnimationParametrs({fontSize : '12px'})}
    }, [])

    const animation = {
        rotated: {
            rotate: -90,
            opacity: 0.5,
            ...animationParametrs
        },
        normal: {
            rotate: 0
        }
        
    }

    return (
        <motion.div className={style.product}
            onMouseEnter={() => onHoverMousehandler(number)}
            onMouseLeave={() => onMouseLeave()}
            onClick={()=>goToHandler()}
        >
            <img src={image} alt={alt} className={style.image} />
            {<motion.h2
                animate={active ? 'normal' : 'rotated'}
                variants={animation}
                transition={{ duration: 0.5 }}
            >
                {text}
            </motion.h2>}
        </motion.div>
    )
};

export default Product;
