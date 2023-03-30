import React,{ useEffect, useState } from 'react'
import { getAllBillsByGroup } from '../services/billService'
import { StoreContext } from '../store/store'

export default function useBills() {
  const { isRefreshing } = React.useContext(StoreContext)
  const [bills, setBills] = useState([])

  useEffect(() => {
    getAllBillsByGroup().then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])

 // update the bill state
  const updateBills = () => {
    getAllBillsByGroup().then((response) => {
      setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }

  return { bills, updateBills }
}



