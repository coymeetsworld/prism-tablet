import { combineReducers, createStore, compose } from 'redux';
import {someReducer} from 'reducers';
export let configure = () => {
  
  const reducer = combineReducers({
    something: someReducer  
  }); 

  let initialState = {something: {}};
  
  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )); 
  
  return store;

}

