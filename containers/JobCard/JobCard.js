import React from "react";
import { css, } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { Small, H5, Button, Hyperlink } from "../../components";
import Link from "next/link";


const JobCard = ({ data }) => {
  const theme = useTheme()

  return (
    <div className={css`
    padding:16px 48px 16px 8px;
    display:flex;
    justify-content:space-between;
    align-items:center;
   
    background-color:${theme.colors.primary};
    border-radius:${theme.borderRadius[1]};
    position:relative;
    cursor:pointer;
    transition-duration:0.4s;
    margin-bottom:12px;
    &:hover{
      box-shadow:${theme.boxShadow.light};
      color:white;
      background-color:${theme.colors.secondary}
    }` }>
      <div>
        <Small>{data.company}</Small>
        <H5> {data.title}</H5>
        <Small>{data.job_type} </Small>
      </div>

      <div className={css`
   min-width:300px;
   height:90px;
   transition-duration:0.4s;
   border-color:white;
   display:flex;
   flex-direction:column;
   align-items:center;
   border-left:${theme.borderRadius[2]} solid
  
   `}>
        <Small>{data.date}</Small>
        <Hyperlink href={`/jobs/${data.id}`}>more info</Hyperlink>

      </div>


    </div>
  )

}

export default JobCard
