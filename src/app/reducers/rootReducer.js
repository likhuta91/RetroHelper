import { combineReducers } from 'redux'
import ticketsSlice from './ticketReducer'

export default combineReducers({
    tickets: ticketsSlice
})