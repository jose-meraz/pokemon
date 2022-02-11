import { createStore, applyMiddleware, combineReducers,compose } from 'redux'
import thunk from 'redux-thunk'
import pokemonReducer from './reducers/pokemonReducer'
import { authReducer } from './reducers/authReducer';
import { uiReducer } from './reducers/uiReducer';

const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  auth: authReducer,
  ui: uiReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware( thunk )
));

export default store