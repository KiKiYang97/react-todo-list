import { createStore } from 'redux';
import reducers from "../reducers";
let store;
if( window.__REDUX_DEVTOOLS_EXTENSION__===undefined){
    store = createStore(reducers);
}else{
    store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__());
}
export default store
