import React,{ useEffect, useState } from 'react'
import { searchBills } from '../services/billService'
import { StoreContext } from '../store/store'

export const useSearchBills = (type) => {
    console.log("type is:",type)
  const { isRefreshing } = React.useContext(StoreContext)
  const [bills, setBills] = useState([])

  useEffect(() => {
    searchBills(type).then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }, [isRefreshing,type])

  return { bills }
}



