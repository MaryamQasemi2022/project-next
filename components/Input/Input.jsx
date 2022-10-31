import React from "react";
import { css,} from '@emotion/css';
import {  useTheme } from '@emotion/react';
const Input=({placeholder,type='text',onChange,...props})=>{
  const theme=useTheme()
 
  return(
      <input {...props} onChange={(e)=>onChange(e.target.value)} type={type} placeholder={placeholder}  className={css`
       width:100%;
        font-size:${theme.typography.h5.fontSize}rem;
        padding:${theme.spaces[4]};
        border-radius:${theme.borderRadius[1]};
        border:${theme.borderRadius[1]} solid ${theme.colors.primary};
        &:focus{
          border-color: ${theme.colors.blue};

        }
        display:inline-block;
        position:relative;
        outline:none;
        
        `} />
  )
}

export default Input;
