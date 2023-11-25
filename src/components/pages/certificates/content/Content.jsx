import style from "./Content.module.scss"
import image1 from '../../../../assets/certificates/certificates/certificate_ISO_DSTU_p1.jpg'
import image2 from '../../../../assets/certificates/certificates/certificate_ISO_DSTU_p2.jpg'
import image3 from '../../../../assets/certificates/certificates/certificate_ISO_eng_p1.jpg'
import image4 from '../../../../assets/certificates/certificates/certificate_ISO_eng_p2.jpg'
import image5 from '../../../../assets/certificates/certificates/certificate_ISO_ua_p1.jpg'
import image6 from '../../../../assets/certificates/certificates/certificate_ISO_ua_p2.jpg'
import image7 from '../../../../assets/certificates/certificates/consulting_addivities_2013_p1.jpg'
import image8 from '../../../../assets/certificates/certificates/consulting_addivities_2013_p2.jpg'
import image9 from '../../../../assets/certificates/certificates/consulting_dyes_2015_p1.jpg'
import image10 from '../../../../assets/certificates/certificates/consulting_dyes_2015_p2.jpg'
import image11 from '../../../../assets/certificates/certificates/consulting_mesh_2015_p1.jpg'
import image12 from '../../../../assets/certificates/certificates/consulting_mesh_2015_p2.jpg'
import image13 from '../../../../assets/certificates/certificates/san_vegetables_p1.jpg'
import image14 from '../../../../assets/certificates/certificates/san_vegetables_p2.jpg'
import { useState } from "react"
import ImagePopUp from "./imagePopUp/ImagePopUp"



const Content = ({ props }) => {

    const arrayCertificates = [
        image1, image2, image3, image4, image5,
        image6, image7, image8, image9, image10,
        image11, image12, image13, image14
    ]
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(null)

    const openPopUphandler = (index) =>{
        setIsOpen((prev)=> !prev)
        setIndex(index)
    }
   
    return (
        <div className={style.container}>
            {isOpen && 
                <ImagePopUp image={arrayCertificates[index]} closePopUp={setIsOpen}/>
            }

            <div className = {style.wrapper}>

                {
                    arrayCertificates.map((certificate, index) => {
                        return (
                            <div className={style.box} key={index}>
                                <img src={certificate} alt="" className={style.image} onClick={()=>{openPopUphandler(index)}}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Content;
