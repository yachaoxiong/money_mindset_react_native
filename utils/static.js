import { faUtensils, faTv, faBagShopping, faCarSide, faHouseUser, faMobile, faLightbulb, faWater, faTrash, faGlobe, faPen, faBook } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill,faMoneyCheckDollar, faMap, faHouse, faMoneyBills, faGift, faFilterCircleDollar, faCoins } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard,faCreditCardAlt, faEject } from '@fortawesome/free-solid-svg-icons';
export const calendarMonths = [
    { key: '1', value: '01' },
    { key: '2', value: '02' },
    { key: '3', value: '03' },
    { key: '4', value: '04' },
    { key: '5', value: '05' },
    { key: '6', value: '06' },
    { key: '7', value: '07' },
    { key: '8', value: '08' },
    { key: '9', value: '09' },
    { key: '10', value: '10' },
    { key: '11', value: '11' },
    { key: '12', value: '12' },
]

export const calendarYear = [
    { key: '1', value: '2023' },
    { key: '2', value: '2024' },
    { key: '3', value: '2025' },
    { key: '4', value: '2026' },
    { key: '5', value: '2027' },
    { key: '6', value: '2028' },
    { key: '7', value: '2029' },
    { key: '8', value: '2030' },
    { key: '9', value: '2031' },
    { key: '10', value: '2032' },
    { key: '11', value: '2033' },
    { key: '12', value: '2034' },
]

export const expenseType = [
    { icon: faUtensils, text: "Food",iconName:"faUtensils"},
    { icon: faTv, text: "Appliance",iconName:"faTv"},
    { icon: faBagShopping, text: "Daily Expenses",iconName:"faBagShopping"},
    { icon: faHouseUser, text: "Rent",iconName:"faHouseUser"},
    { icon: faCarSide, text: "Transportation",iconName:"faCarSide"},
    { icon: faLightbulb, text: "Electricity",iconName:"faLightbulb"},
    { icon: faMobile, text: "Phone Bill",iconName:"faMobile"},
    { icon: faWater, text: "Water Bill",iconName:"faWater"},
    { icon: faTrash, text: "Trash",iconName:"faTrash"},
    { icon: faGlobe, text: "Internet",iconName:"faGlobe"},
    { icon: faBook, text: "Book",iconName:"faBook"},
    { icon: faPen, text: "Others",iconName:"faPen"},
]

export const incomeType = [
    { icon: faMoneyBill, text: "Salary",iconName:"faMoneyBill"},
    { icon: faMoneyCheckDollar, text: "Stock",iconName:"faMoneyCheckDollar"},
    { icon: faMap, text: "Interest",iconName:"faMap"},
    { icon: faHouse, text: "Rental",iconName:"faHouse"},
    { icon: faMoneyBills, text: "Investment",iconName:"faMoneyBills"},
    { icon: faGift, text: "Gift",iconName:"faGift"},
    { icon: faFilterCircleDollar, text: "Options",iconName:"faFilterCircleDollar"},
    { icon: faCoins, text: "Tips",iconName:"faCoins"},
    { icon: faPen, text: "Others",iconName:"faPen"},
]

export const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

export const newAssetsCategory = [
    { icon: faMoneyBill, text: "Cash",iconName:"faMoneyBill"},
    { icon: faCreditCard, text: "Credit Card",iconName:"faCreditCard"},
    { icon: faCreditCardAlt, text: "Debit Card",iconName:"faCreditCardAlt"},
    { icon: faEject, text: "Debt",iconName:"faEject"},
]

export const cashAndDebtTextFieldHeader = ['Name','Note','Amount'];
export const debitAndCreditCardTextFieldHeader = ['Name','Bank','Last 4 digits','Note','Amount'];

export const iconMap = new Map();
expenseType.forEach(item=>{
    iconMap.set(item.iconName,item.icon);
});
incomeType.forEach(item=>{
    iconMap.set(item.iconName,item.icon);
});

