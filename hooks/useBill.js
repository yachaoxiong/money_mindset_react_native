import React,{ useEffect, useState } from 'react'
import { getAllBills } from '../services/billService'
import { StoreContext } from '../store/store'

export default function useBills(period) {
  const { isRefreshing } = React.useContext(StoreContext)
  const [bill, setBills] = useState([])

  useEffect(() => {
    getAllBills(period).then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing,period])
  
  return bill
}



