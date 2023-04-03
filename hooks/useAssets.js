import React,{ useEffect, useState } from 'react'
import { getAllAssets} from '../services/assetsService'
import { StoreContext } from '../store/store'

export default function useAssets() {
  const { isRefreshing } = React.useContext(StoreContext);
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    getAllAssets().then((response) => {
        setAssets(response.data)
    }).catch((error) => {
      console.log(error)
    }
    )
  }, [isRefreshing])

  return assets;
}



