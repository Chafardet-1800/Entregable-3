import axios from "axios"
import { useEffect, useState } from "react"

const useLocationApi = (idLocation) => {
    const randomLocation = Math.ceil(Math.random() * 126)
    const [location, setLocation] = useState(randomLocation)
    const [planet, setPlanet] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
      if(location !== undefined){
          setIsLoading(true)
          const URL = `https://rickandmortyapi.com/api/location/${location}`
            axios.get(URL)
              .then(res =>{
                 setPlanet(res.data)
                 setIsLoading(false)
                })
              .catch(err => console.log(err))
        }
    }, [location])

    useEffect(()=>{
      setLocation(idLocation)
    },[idLocation])

  return {planet, isLoading}
}

export default useLocationApi