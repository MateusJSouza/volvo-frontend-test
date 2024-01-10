import axios from 'axios'
import { useEffect, useState } from 'react'
import { Car } from '../types/car.interface'

export function useCars() {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_API_URL + '/api/cars')
      .then((response) => {
        setCars(response.data)
      })
  }, [])

  return { cars }
}
