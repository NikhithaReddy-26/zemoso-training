import React from 'react' ;

export interface ButtonProps{
    handleClick: () =>void
    label: string
    type: 'button'
    color: string
}
const Button=({handleClick,label,color}:ButtonProps)=>{
    const buttonClass ='button${color}';
    return (
        <button onClick={handleClick} className={buttonClass} >
          {label}
        </button>
      )

}
export default Button;