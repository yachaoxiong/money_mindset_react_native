import React,{ useEffect, useState } from 'react'
import { getAllBills, updateBill } from '../services/billService'
import { StoreContext } from '../store/store'

export default function useBills() {
  const { isRefreshing } = React.useContext(StoreContext)
  const [bills, setBills] = useState([])

  useEffect(() => {
    getAllBills().then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])

 // update the bill state
  const updateBills = () => {
    getAllBills().then((response) => {
      setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }

  
  return { bills, updateBills }
}



