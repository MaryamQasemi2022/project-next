import React from "react";
import { css,} from '@emotion/css';
import {  useTheme } from '@emotion/react'
import Img from "../Img/Img";

const Button=({
  children,
  type='button',
  widthAll,
  loading=false,
  disabled=false,
  onClick=()=>{}
})=>{
  const theme=useTheme()
  return(
   
       <button onClick={onClick} disabled={disabled} type={type}  className={css`

       width:100%;
       color:${type=='primary'?'white':'white'};
        background-color:${theme.colors.blue};
        font-size:${theme.typography.paragraph.fontSize}rem;
        padding:${theme.spaces[4]};
        border-radius:${theme.borderRadius[1]};
        border:none;
        display:flex;
        justify-content:center;
        cursor:pointer;
        position:relative;
        transition: box-shadow 0.5s;
        box-shadow:${theme.boxShadow.light};
        &:hover{
          box-shadow:none;
          background-color:${theme.colors.secondary};
        
        }
        `} >
      {loading ? <Img width='30px' height='25px' src='loading/loading.gif'/>: children}
    </button>
  
  )
}

export default Button;
