import * as SecureStore from 'expo-secure-store';

export const setToken = async (token) => {
  try {
    await SecureStore.setItemAsync('token', token);
  } catch (error) {
    console.log('Error setting token', error);
  }
}

export const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    return token;
  } catch (error) {
    console.log('Error getting token', error);
  }
}

export const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync('token');
  } catch (error) {
    console.log('Error removing token', error);
  }
}

export const getTodayDate = () => {
 const currentDate = new Date().toISOString().slice(0, 10);
 return " "+currentDate;
}


