import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleClientSelection } from '../../Redux/Actions/clients'
import './rightComponent.css'

const RightComponent = ({list}) => {
  const dispatch = useDispatch()
  var nvsCount = 0;
  return (
    <div data-testid="right-component" className={`right-container`}>
      {list.map((item, index) => {
        nvsCount += item.selectedItems
        return <div key={index}>
          {item.selectedItems>0 && <h4>{item.place}</h4>}
          { 
            item.selectedItems>0 && item.clients.map((client, i) => (
             client.selected && <div key={i} className="alert alert-secondary text-gains alert-dismissible fade show">
              <button type="button" className="close" data-dismiss="alert" 
                onClick={() =>dispatch(toggleClientSelection(item.id - 1, client.id - 1))}>
                  &times;
              </button>
              {client.name}
            </div>
            ))
          }
        </div>
        })}
        {nvsCount===0 && <div className={`nvs-div`}><h4 data-testid="nvs">No value selected</h4></div>}
    </div>
  )
}

export default RightComponent
