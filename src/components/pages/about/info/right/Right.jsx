import style from "./Right.module.scss"

const Right = ({text, img, alt}) => {

  return (
    <div className = {style.container}>
      <div className = {style.text}> 
          <p>{text}</p>
      </div>
      <div className = {style.image}>
        <img src={img} alt={alt} />
      </div>
    </div>
  )
};

export default Right;
