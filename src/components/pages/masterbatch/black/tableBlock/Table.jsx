import style from "./Table.module.scss"
import { ReactComponent as PDFLogo } from "../../../../../assets/masterbatchpage/pdfs/pdfLogo.svg";
import pdf4637 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import pdf6281 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import { motion } from "framer-motion";


const Table = ({ text }) => {
    const contentAnimation = {
        hidden: custom => ({
            x: custom.animationPosition * 10,
            opacity: 0,
        }),
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom.delay * 0.2,
                duration: 0.3
            }
        }),
    }

    return (
        <table className={style.table}>
            <motion.tbody
                initial='hidden'
                whileInView='visible'
                variants={contentAnimation}
                custom={{ delay: 1, animationPosition: -30 }}
            >

                <tr>
                    <td>PLASBLACK РЕ6281</td>
                    <td>
                        <a href={pdf6281}
                            target="_blank"
                            rel="noreferrer">
                            <div>
                                <span>{text} </span>
                                <PDFLogo />
                            </div>
                        </a>
                    </td>
                </tr>
                <tr>
                    <td>PLASBLACK РЕ4637</td>
                    <td>
                        <a href={pdf4637} target="_blank" rel="noreferrer">
                            <div>
                                <span>{text} </span>
                                <PDFLogo />
                            </div>
                        </a>
                    </td>
                </tr>
            </motion.tbody>

        </table>
    )
};

export default Table;
