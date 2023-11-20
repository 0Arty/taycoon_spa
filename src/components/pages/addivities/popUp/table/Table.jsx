import { useSelector } from "react-redux";
import style from "./Table.module.scss"

const Table = ({ article, t }) => {

    const table = useSelector(state => state.addivitiesSlice.popUp.table)

    // meltFlow: true,
    // destinity: true, 
    // heatResistanse: true,
    // foodContact: true,
    return (
        <div>

            <table>
                <tbody>
                    <tr>
                        <td>{t('addPage.popUp.table.properties')}</td>
                        <td>{t('addPage.popUp.table.testMethods')}</td>
                        <td>{t('addPage.popUp.table.units')}</td>
                        <td>{t('addPage.popUp.table.value')}</td>
                    </tr>
                    {table?.meltFlow &&
                        <tr>
                            <td>{t('addPage.popUp.table.meltFlow')}</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                    }
                    {table?.destinity &&
                        <tr>
                            <td>{t('addPage.popUp.table.destinity')}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                    {table?.heatResistanse &&
                        <tr>
                            <td>{t('addPage.popUp.table.heatResistanse')}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }
                    {table?.foodContact &&
                        <tr>
                            <td>{t('addPage.popUp.table.foodContact')}</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    }

                    <tr>
                        <td>{t('addPage.popUp.table.polymer carrier')}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Table;
