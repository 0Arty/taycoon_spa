import { useSelector } from "react-redux";
import style from "./Table.module.scss"

const Table = ({ article, t, parameters }) => {

    return (
            <table className = {style.table}>
                <tbody >
                    <tr>
                        <td>{t('addPage.popUp.table.properties')}</td>
                        <td>{t('addPage.popUp.table.testMethods')}</td>
                        <td>{t('addPage.popUp.table.units')}</td>
                        <td>{t('addPage.popUp.table.value')}</td>
                    </tr>
                    {parameters?.meltFlow &&
                        <tr>
                            <td>{t('addPage.popUp.table.meltFlow')}</td>
                            <td>{t(`addPage.${article}.meltFlow.method`)}</td>
                            <td>{t(`addPage.${article}.meltFlow.units`)}</td>
                            <td>{t(`addPage.${article}.meltFlow.value`)}</td>
                        </tr>
                    }
                    {parameters?.destinity &&
                        <tr>
                            <td>{t('addPage.popUp.table.destinity')}</td>
                            <td>{t(`addPage.${article}.destinity.method`)}</td>
                            <td>{t(`addPage.${article}.destinity.units`)}</td>
                            <td>{t(`addPage.${article}.destinity.value`)}</td>
                        </tr>
                    }
                    {parameters?.heatResistanse &&
                        <tr>
                            <td>{t('addPage.popUp.table.heatResistanse')}</td>
                            <td>{t(`addPage.${article}.heatResistanse.method`)}</td>
                            <td>{t(`addPage.${article}.heatResistanse.units`)}</td>
                            <td>{t(`addPage.${article}.heatResistanse.value`)}</td>
                        </tr>
                    }
                    {parameters?.foodContact &&
                        <tr>
                            <td>{t('addPage.popUp.table.foodContact')}</td>
                            <td></td>
                            <td></td>
                            <td>+</td>
                        </tr>
                    }

                    <tr>
                        <td>{t('addPage.popUp.table.polymer carrier')}</td>
                        <td></td>
                        <td></td>
                        <td>{t(`addPage.${article}.polymer`)}</td>
                    </tr>
                </tbody>
            </table>
    )
};

export default Table;
