import { createStore } from 'redux';
import rootReducer from './root/rootReducer';

function store(state = { ongoing: 1, location: '', Kayak:''}) {
    return createStore(rootReducer,state);
}

export default store;
