import style from "./Paragraph.module.scss"

const Using = ({heading, paragraph}) => {

  return (
    <div className = {style.container}>
        <h6>{heading}</h6>
        <p>{paragraph}
          
        </p>
    </div>
  )
};

export default Using;
