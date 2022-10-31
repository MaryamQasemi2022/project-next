import { css, } from '@emotion/css';
import { GET_LIST_JOB_ACTION } from '../../actions';
import { useRouter } from 'next/router';

const Jobs = ({ props }) => {

  const { jobs } = props.job
  const pageId = useRouter().query.id[0]
  const select = jobs.find(item => item.id == pageId)

  return (
    <div className={css`
    margin:10px auto;
    text-align:center;
    `} >
      <h3>{select.title}</h3>
      <h3>{select.company}</h3>
      <h3>{select.date}</h3>
    </div>
  )
}

Jobs.getInitialProps = async (ctx) => {
  await ctx.reduxStore.dispatch(GET_LIST_JOB_ACTION())
  const state = ctx.reduxStore.getState()

  return { props: state }
}


export default Jobs;


