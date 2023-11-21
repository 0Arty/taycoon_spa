import  style from "./Table.module.scss"
import { ReactComponent as PDFLogo } from "../../../../../assets/masterbatchpage/pdfs/pdfLogo.svg";
import pdf2727 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import pdf2824 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import pdf4637 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'
import pdf6281 from '../../../../../assets/masterbatchpage/pdfs/2727.pdf'


const Table = ({ text }) => {

    return (
        <table className = {style.table}>
            <tbody>
                <tr>
                    <td>PLASBLAK PE2727</td>
                    <td><a href={pdf2727} target="_blank"><div><span>{text} </span><PDFLogo /></div></a></td>
                </tr>
                <tr>
                    <td>PLASBLACK РЕ6281</td>
                    <td><a href={pdf2824} download={"pdf2727.pdf"} target="_blank"><div><span>{text} </span><PDFLogo /></div></a></td>
                </tr>
                <tr>
                    <td>PLASBLAK PE2824</td>
                    <td><a href={pdf4637} target="_blank"><div><span>{text} </span><PDFLogo /></div></a></td>
                </tr>
                <tr>
                    <td>PLASBLACK РЕ4637</td>
                    <td><a href={pdf6281} target="_blank"><div><span>{text} </span><PDFLogo /></div></a></td>
                </tr>
            </tbody>

        </table>
    )
};

export default Table;
