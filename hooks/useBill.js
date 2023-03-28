import React,{ useEffect, useState } from 'react'
import { getAllBills } from '../services/billService'
import { StoreContext } from '../store/store'

export default function useBills() {
  const { isRefreshing } = React.useContext(StoreContext)
  const [bill, setBills] = useState([])

  useEffect(() => {
    getAllBills().then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])
  
  return bill
}



