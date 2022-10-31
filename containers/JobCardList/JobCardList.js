import React, { useEffect } from "react";
import { css, } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { useSelector, useDispatch } from 'react-redux';
import { GET_LIST_JOB_ACTION } from "../../actions";
import JobCard from "../JobCard/JobCard";
import { Button } from "../../components";

const JobCardList = ({ state }) => {
  /////////ssr/////////////
  const { jobs, loading } = state.job
  /////////////////////////////


  ///////client side rendering///////////////
  // const dispatch = useDispatch()
  // const { jobs, loading } = useSelector(state => state.job)
  // useEffect(() => {
  //   dispatch(GET_LIST_JOB_ACTION())
  // }, [])
  ////////////////////////////////////

  return (
    <div>
      {loading && <Button loading="true" />}
      {(!loading && jobs) && jobs.map((item) => (<JobCard data={item} key={`Item_${item.id}`} />))}

    </div>
  )
}

// export async function getServerSideProps() {

//   const dispatch = useDispatch()
//   dispatch(GET_LIST_JOB_ACTION())
//   const { jobs, loading } = await useSelector(state => state.job)
//   console.log('jobcard')
//   return { props: { state: [jobs, loading] } }
// }

export default JobCardList;
