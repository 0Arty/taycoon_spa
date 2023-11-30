import { useTranslation } from "react-i18next";
import style from "./TableBlock.module.scss"
import { motion } from "framer-motion";
import { ReactComponent as PDFLogo } from "../../../../../assets/masterbatchpage/pdfs/pdfLogo.svg";
import pdf2155 from '../../../../../assets/masterbatchpage/pdfs/2155.pdf'
const TableBlock = ({ props }) => {

    const { t } = useTranslation()

    const contentAnimation = {

        hidden: {
            x: -300,
            opacity: 0,
        },
        visible: custom => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: custom * 0.2,
                duration: 0.3
            }
        }),

    }

    return (
        <motion.table className={style.table}>
            <motion.tbody
                        initial='hidden'
                        whileInView='visible'
                        variants={contentAnimation}
                        custom={1}
            >
                <tr>
                    <td>PLASBLACK РЕ2155</td>
                    <td>
                        <a href={pdf2155}
                            target="_blank"
                            rel="noreferrer">
                            <div>
                                <span>{t('masterbatchPage.black.table.download')} </span>
                                <PDFLogo />
                            </div>
                        </a>
                    </td>
                </tr>
                
            </motion.tbody>
        </motion.table>
    )
};

export default TableBlock;
