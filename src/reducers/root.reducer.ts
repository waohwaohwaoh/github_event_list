import {combineReducers} from 'redux';
import {IRootState} from '../interface';
import eventsReducer from './events.reducer';

const rootReducer = combineReducers<IRootState>({
    events: eventsReducer
  });
  export default rootReducer;