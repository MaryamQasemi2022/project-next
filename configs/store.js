// import { legacy_createStore as createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import rootReducer from "../reducers"
// import { composeWithDevTools } from 'redux-devtools-extension';
// const composeEnhancers = composeWithDevTools({
//   name: 'job'
// });

// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
// export default store;


import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from "../reducers"
import auth from '../reducers/auth';
import job from '../reducers/job';
import { configureStore } from '@reduxjs/toolkit'
const composeEnhancers = composeWithDevTools({
  name: 'job'
});
export default configureStore({
  reducer: {
    auth: auth,
    job: job
  },
  // composeEnhancers()
})
