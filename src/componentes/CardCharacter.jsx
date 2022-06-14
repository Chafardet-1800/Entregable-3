import React from 'react'
import useCharacterApi from '../../hooks/useCharacterApi'

const CardCharacter = ({resident}) => {
    const {character} = useCharacterApi(resident)
  return (
    <div className='CardCharacter'>
        <h1>{character?.name}</h1>
        <img src={character?.image} alt="img" />
        <ul>
          <li><b>Status: </b>{character?.status}</li>
          <li><b>Origin: </b>{character?.origin.name}</li>
          <li><b>Episodies: </b>{character?.episode.length}</li>
        </ul>
    </div>
  )
}

export default CardCharacter