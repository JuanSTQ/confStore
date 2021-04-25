import {useEffect, useState} from 'react';
import axios from 'axios'

const useGoogleAddress = address=>{
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBBXNLc81kppB_WOPhXdW4B7WysjOk3spk`
  useEffect(async()=>{
    const response = await axios(API) //Axios nos retorna un objeto no hace falta data=>JSON
    setMap(response.data.results[0].geometry.location)
  },[])

  return [map]
}

export default useGoogleAddress