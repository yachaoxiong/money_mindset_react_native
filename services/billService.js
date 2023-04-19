import { getToken } from "../utils/functions";
import fetch from "node-fetch";

// const baseUrl = 'https://bewildered-ruby-tadpole.cyclic.app';
const baseUrl = 'http://localhost:3000';

export const getAllBills = async (period) => {
  const token = await getToken();
  if (!token) return;
  return fetch(baseUrl + `/api/bill/${period}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}

export const searchBills = async (type) => {
  const token = await getToken();
  if (!token) return;
  return fetch(baseUrl + `/api/bill/search/${type}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  ); 
}

export const getAllBillsByGroup = async () => {
  const token = await getToken();
  if (!token) return;
  return fetch(baseUrl + '/api/bill', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}


export const getBillById = async (billID) => {
  const token = await getToken();
  return fetch(baseUrl+`/api/bill/${billID}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}

export const updateBill = async (bill) => {
  const token = await getToken();

  return fetch(baseUrl + `/api/bill/${bill._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    },
    body: JSON.stringify(bill)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}

export const addNewBill = async (bill) => {
  const token = await getToken();
  return fetch(baseUrl + '/api/bill', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'authorization': 'Bearer ' + token
    },
    body: JSON.stringify(bill)
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}


export const deleteBill = async (billID) => {
  const token = await getToken();
  return fetch(baseUrl + `/api/bill/${billID}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application',
      'authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    }
  )
    .catch((error) => {
      console.error(error);
    }
  );
}


export const getAllBillsForSearch = async () => {
  const token = await getToken();
  return fetch(baseUrl + '/api/bill/all/current', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    }
  );
}
