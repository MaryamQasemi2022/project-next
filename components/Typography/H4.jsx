import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';
const H4=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <h4 className={css`
    text-align:${align};
    margin: ${theme.spaces[4]} 0 ;
    font-weight: ${theme.typography.h4.fontWeight};
    line-height: ${theme.typography.h4.lineHeight};
    font-size: ${theme.typography.h4.fontSize}rem;
  }
    `}>{children}</h4>
  )
}
export default H4;

