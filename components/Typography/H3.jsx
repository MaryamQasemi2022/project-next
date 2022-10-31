import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const H3=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <h3 className={css`
    text-align:${align};
    margin: ${theme.spaces[4]} 0 ;
    font-weight: ${theme.typography.h3.fontWeight};
    line-height: ${theme.typography.h3.lineHeight};
    font-size: ${theme.typography.h3.fontSize}rem;
  }
    `}>{children}</h3>
  )
}
export default H3;

