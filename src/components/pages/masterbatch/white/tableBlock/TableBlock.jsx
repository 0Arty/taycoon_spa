import { useTranslation } from "react-i18next";
import style from "./TableBlock.module.scss"
import { motion } from "framer-motion";

const TableBlock = ({ props }) => {

    const { t } = useTranslation()

    const contentAnimation = {

        hidden: {
            x: -400,
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
        <motion.table className={style.table}

        >
            <motion.tbody
                        initial='hidden'
                        whileInView='visible'
                        variants={contentAnimation}
                        custom={1}
            >
                <tr>
                    <td>{t('masterbatchPage.white.table.11')}</td>
                    <td>{t('masterbatchPage.white.table.12')}</td>
                    <td>{t('masterbatchPage.white.table.13')}</td>
                </tr>
                <tr>
                    <td>{t('masterbatchPage.white.table.21')}</td>
                    <td>Ре</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>{t('masterbatchPage.white.table.31')}</td>
                    <td>{t('masterbatchPage.white.table.32')}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>{t('masterbatchPage.white.table.41')}</td>
                    <td>{t('masterbatchPage.white.table.42')}</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>{t('masterbatchPage.white.table.51')}</td>
                    <td>{t('masterbatchPage.white.table.52')}</td>
                    <td>CTM EO23</td>
                </tr>
                <tr>
                    <td>{t('masterbatchPage.white.table.61')}</td>
                    <td>{t('masterbatchPage.white.table.62')}</td>
                    <td>СТМ E006 (ISO 1133)</td>
                </tr>
            </motion.tbody>

        </motion.table>
    )
};

export default TableBlock;