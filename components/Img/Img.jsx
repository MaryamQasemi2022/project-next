import React from "react";
import { css,} from '@emotion/css';
// import {  useTheme } from '@emotion/react'
const Img=({src,alt='picture',width,height})=>{
  // const theme=useTheme()
  return(
       <div  className={css`
      
      width:${width};
      height:${height};
      overflow:hidden
        }
        `} >
      <img alt={alt} src={src} className={css`
      max-width:100%;
      max-height:100%;
      object-fit:cover;
      `}/>
    </div>
  
  )
}

export default Img;
