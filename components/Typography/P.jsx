import React from "react";
import {  useTheme } from '@emotion/react'
import { css,} from '@emotion/css';

const P=({children,align='right'})=>{
  const theme=useTheme()
  return(
    <p className={css`
    text-align:${align};
    margin-bottom:0;
    font-size: ${theme.typography.paragraph.fontSize}rem;
    font-weight: ${theme.typography.paragraph.fontweight};
    line-height: ${theme.typography.paragraph.lineHeight};
  }
    `}>{children}</p>
  )
}
export default P;

