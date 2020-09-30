import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleClientSelection } from '../../Redux/Actions/clients'

const LeftComponent = ({list}) => {
  const dispatch = useDispatch()
  var nvsCount = 0;

  return (
    <div data-testid="left-component" className={`left-container`}>
      {list.map((item, index) => (
        <div key={index}>
          <h4>{item.place}</h4>
          {
            item.clients.map((client, i) => (
              <div className="custom-control custom-checkbox mb-3" key={i}>          
                <input type="checkbox" className="custom-control-input" id={`cb-${index}${i}`} checked={client.selected} 
                  onChange={(e) => {
                    dispatch(toggleClientSelection(item.id - 1, client.id - 1))
                  }}
                />
                <label className="custom-control-label" htmlFor={`cb-${index}${i}`}>{client.name}</label>
              </div>
            ))
          }
        </div>
      ))}
      {list.length === 0 && <div className={`nvs-div`}><h4 data-testid="ntd">No Clients to Display</h4></div>}
    </div>
  )
}

export default LeftComponent
