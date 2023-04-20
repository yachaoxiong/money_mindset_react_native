import React,{ useEffect, useState } from 'react'
import { getAllBillsForSearch } from '../services/billService'

export default function useSearch() {
  const [bills, setBills] = useState([])
  useEffect(() => {
    getAllBillsForSearch().then((response) => {
        setBills(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  } , [])
  return bills 
}
