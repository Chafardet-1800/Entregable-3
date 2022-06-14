import React, { useEffect } from 'react'
import useLocationApi from '../../hooks/useLocationApi'

const InputSearch = ({setIdLocation}) => {
    
    const submitLocation= e => {
      e.preventDefault();
      setIdLocation(e.target.firstChild.value);
  }

    return(
        
            <div className="input-group mb-3">
                <form onSubmit={submitLocation}>
                    <input type="text" className="form-control" placeholder="Word Id" aria-label="Recipient's username" aria-describedby="button-addon2"></input>
                </form>
            </div>
       
    )
}

export default InputSearch