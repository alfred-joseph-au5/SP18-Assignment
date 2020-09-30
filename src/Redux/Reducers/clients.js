import clients from '../../Data/Clients'
import { TOGGLE_CLIENT_SELECTION } from '../Actions/type'

const initialState = {
  list: clients
}

export default (state = initialState, action = {}) => {
  switch(action.type){
    case TOGGLE_CLIENT_SELECTION: 
        let list = [...state.list]
        const { placeId, clientId } = action.payload
        if(!list[placeId].clients[clientId].selected) {
          list[placeId].clients[clientId].selected = true
          list[placeId].selectedItems++
        } else {
          list[placeId].clients[clientId].selected = false
          list[placeId].selectedItems--
        }
        return {
          ...state,
          list
        }
    default: return state
  }
}