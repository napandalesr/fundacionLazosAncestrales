import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { scrollReducer } from './reducers/scrollReducer';
import { widthReducer } from './reducers/widrhReducer';

const reducers = combineReducers({
	width: widthReducer,
	scroll: scrollReducer
});

export default createStore(
	reducers,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
);
