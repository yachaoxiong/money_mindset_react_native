import React, { useEffect, useState } from 'react'

import { getAllBillsForSearch } from '../services/billService'

import { StoreContext } from '../store/store'

export default function useSearch() {

  const { isRefreshing } = React.useContext(StoreContext)

  const [bills, setBills] = useState([])

  useEffect(() => {

    getAllBillsForSearch().then((response) => {

      setBills(response.data)

    }).catch((error) => {

      console.log(error)

    }

    )

  }, [isRefreshing])

  return bills

}








