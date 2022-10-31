import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const Space=()=>{
  const theme=useTheme()
  return(
   <div className={css`
   width:100%;
   height:1rem;
   `}/>
  )
}
export default Space;

