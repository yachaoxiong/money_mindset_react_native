import React,{ useEffect, useState } from 'react'
import { getAllBills, updateBill } from '../services/billService'
import { StoreContext } from '../store/store'

export default function useBills(period) {
  const { isRefreshing } = React.useContext(StoreContext)
  const [bills, setBills] = useState([])

  useEffect(() => {
    getAllBills(period).then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing, period])

 // update the bill state
  const updateBills = () => {
    getAllBills(period).then((response) => {
      setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }

  return { bills, updateBills }
}



