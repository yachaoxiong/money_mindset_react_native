import { getToken } from "../utils/functions";
import fetch from "node-fetch";

const baseUrl = 'http://localhost:3000';

export const addNewAssets = async (assets) => {
    const token = await getToken();
    return fetch(baseUrl + '/api/assets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
        },
        body: JSON.stringify(assets)
    })
    .then((response) => response.json())
    .then((responseJson) => {
        return responseJson;
    }).catch((error) => {
        console.error(error);
    });
}

export const getAllAssets = async () => {
    const token = await getToken();
    if (!token) return;
    return fetch(baseUrl + '/api/assets', {
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
    });
}