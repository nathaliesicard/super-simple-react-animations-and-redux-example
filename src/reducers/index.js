/**
 * Created by nathaliesicard on 10/5/16.
 */
import { combineReducers } from 'redux'
import counter from './counter'

const counterApp = combineReducers({
  counter
})

export default counterApp