import style from "./Left.module.scss"

const Left = ({text, img, alt}) => {

  return (
    <div className = {style.container}>
      <div className = {style.image}>
        <img src={img} alt={alt} />
      </div>
      <div className = {style.text}> 
          <p>{text}</p>
      </div>
    </div>
  )
};

export default Left;
