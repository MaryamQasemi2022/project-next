import React from "react";
import { css,} from '@emotion/css';
import {  useTheme } from '@emotion/react'
import Link from "next/link";

const Hyperlink=({children,href})=>{
  const theme=useTheme()
  return(
   
       <Link href={href} >
        <a className={css`
       display:block;
       
       color:${theme.colors.blue};
        font-size:${theme.typography.h5.fontSize}rem;
        cursor:pointer;
        transition: font-size 0.5s;
        &:active{
          font-size:${theme.typography.h4.fontSize}rem;
        }
        `}>
          {children}
        </a>
      
    </Link>
  
  )
}

export default Hyperlink;
