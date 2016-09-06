import { combineReducers } from 'redux'
import leads from './leads'
import accounts from './accounts'
import appointments from './appointments'

const reducer = combineReducers({
	leads,
	appointments,
	accounts
})

export default reducer