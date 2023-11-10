import style from "./TableBlock.module.scss"

const TableBlock = ({ props }) => {

    return (
        <table>
            <tbody>
                <tr>
                    <td>Назва</td>
                    <td>Значення</td>
                    <td>Метод тестування(*)</td>
                </tr>
                <tr>
                    <td>Полімер</td>
                    <td>Ре</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Пігмент</td>
                    <td>40% двоокис титану</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Сумістність</td>
                    <td>LDPE, LLDPE, HDPE, PP, сополімери етилену</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Удільна вага при 23С</td>
                    <td>2000 кг/м3</td>
                    <td>CTM EO23</td>
                </tr>
                <tr>
                    <td>ПТР (2,16 кг/190 C)</td>
                    <td>11г/10хв</td>
                    <td>СТМ E006 (ISO 1133)</td>
                </tr>
            </tbody>

        </table>
    )
};

export default TableBlock;
