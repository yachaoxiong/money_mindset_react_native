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
  return " " + currentDate;
}

export const groupbillTypeAmountByPeriod = (bills,billType) => {
  let map = new Map();
  let totolIncome = 0;
  bills.forEach((bill) => {
    bill.billItems.forEach((billItem) => {
      if(billItem.billType === billType && Number(billItem.amount)!==0){
        if(!map.has(billItem.iconName)){
          map.set(billItem.iconName, Number(billItem.amount));
        }else{
          map.set(billItem.iconName, map.get(billItem.iconName) + Number(billItem.amount));
        }
        totolIncome+=Number(billItem.amount);
      }
    })
  });
  const arr = Array.from(map, function (entry) {
    return { key: entry[0], value: entry[1] };
  });
  return [arr,totolIncome];
}


