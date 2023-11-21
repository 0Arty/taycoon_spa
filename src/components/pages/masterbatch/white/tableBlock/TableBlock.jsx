import { useTranslation } from "react-i18next";
import style from "./TableBlock.module.scss"

const TableBlock = ({ props }) => {

    const {t} = useTranslation()
    return (
        <table className = {style.table}>
            <tbody>
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
            </tbody>

        </table>
    )
};

export default TableBlock;
