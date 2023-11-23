import style from "./Table.module.scss"
import { ReactComponent as PDFLogo } from "../../../../../assets/masterbatchpage/pdfs/pdfLogo.svg";
import pdf4637 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import pdf6281 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'


const Table = ({ text }) => {

    return (
        <table className={style.table}>
            <tbody>

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
            </tbody>

        </table>
    )
};

export default Table;
