import React, { useEffect, useState } from 'react'
import useLocationApi from '../../hooks/useLocationApi'
import CardCharacter from './CardCharacter'

const CardLocation = ({planet}) => {
    const [status, setStatus] = useState(true)
    

    useEffect(()=>{
        if(planet.residents?.length > 0){
          setStatus(false)
        }
        else{setStatus(true)}
    }, [planet])

  return (
    <>

    <div className='CardPlanet columContainer'>
      
        <div>
          <h2 >{planet.name}</h2>
        </div>
      
        <div className='rowContainer'>
        <p><b>Type: </b> <br /> {planet.type}</p>
        <p><b>Dimension: </b> <br /> {planet.dimension}</p>
        <p><b>Residents Population: </b> <br /> {planet.residents?.length} </p>
        </div>
      
    </div>

    <div className='cardContainer rowContainer'> 
      {status
                ?
      <h2>Aren't Residents in this Planet</h2>
                :
      planet?.residents.map((resident)=>(
        <CardCharacter
          resident={resident}
          key={resident}
        />
      ))
      }

    </div>
        
    </>
  )
}

export default CardLocation