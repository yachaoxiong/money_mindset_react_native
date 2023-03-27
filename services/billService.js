import { getToken } from "../utils/functions";
import fetch from "node-fetch";

const baseUrl = 'http://localhost:3000';

export const getAllBills = async () => {
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
  return fetch(baseUrl + `/api/patients/${billID}`, {
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


