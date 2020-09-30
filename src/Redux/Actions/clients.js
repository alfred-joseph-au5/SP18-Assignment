import { SET_CLIENT_LIST, TOGGLE_CLIENT_SELECTION } from './type'
import Axios from 'axios'
// import { setLoadingState } from './loading'

export const toggleClientSelection = (placeId, clientId) => async dispatch => {
  dispatch({
    type: TOGGLE_CLIENT_SELECTION,
    payload: {
      placeId,
      clientId
    }
  })
}

// Not Using the below actions to avoid API for now as it's out of scope for the Assignment

export const setClientList = (list) => ({
  type: SET_CLIENT_LIST,
  list
})

export const fetchMembersList = () => async dispatch => {
  // dispatch(setLoadingState(true))
  try {
    const res = await Axios({
      url: `https://5f7448cbb638680016160315.mockapi.io/api/v1/clients`,
      method: 'get',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if(res.data?.ok) {
      console.log(res.data);
      dispatch(setClientList(res.data.clients))
      // dispatch(setLoadingState(false))
    }
  } catch(err) {
    console.log(err)
    dispatch(setClientList([]))
    // dispatch(setLoadingState(false))
  }
}