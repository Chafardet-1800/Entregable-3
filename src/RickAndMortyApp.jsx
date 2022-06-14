import React, { useState } from 'react'
import useLocationApi from '../hooks/useLocationApi'
import CardLocation from './componentes/CardLocation'
import InputSearch from './componentes/InputSearch'
import './RickAndMorty.css'
import Loading from './componentes/Loading'
const RickAndMortyApp = () => {

  const [idLocation, setIdLocation] = useState()

  const {planet, isLoading} = useLocationApi(idLocation)

  return (
    <div className='App columContainer'>
          
            <div className='header'>
              
              <div className='imgContainer'>
              <img src="https://blog.redbubble.com/wp-content/uploads/2019/11/rickandmorty.jpg" alt="Portada" />
              </div>

              <div className='InputContainer'>
                <InputSearch
                  setIdLocation={setIdLocation}
                />
              </div>

            </div>
            <div className='main columContainer'>
              {
                isLoading ?
                <Loading />
                :
                  <CardLocation
                    planet = {planet}
                  />
              }
            </div>
    </div>
  )
}

export default RickAndMortyApp