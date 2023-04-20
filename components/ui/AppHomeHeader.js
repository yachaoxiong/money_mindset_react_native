import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list'
import {calendarMonths} from '../../utils/static'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown,faMagnifyingGlass, faWallet } from '@fortawesome/free-solid-svg-icons'
import TabsBarMenu from '../home/TabsBarMenu';
import { homeTabs } from '../../data/home';
import AppTextAmount from './AppTextAmount';
import styles from './styles/appHomeHeaderStyle';

export default AppHomeHeader = (props) => {

    const [selectedListItem, setSelectedListItem] = useState("");
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);

    useEffect(() => {
        let income = 0;
        let expense = 0;
        props.bills.forEach(item => {
            item.billItems.forEach(item => {
                if (item.billType === "Income") {
                    income += Number(item.amount);
                } else {
                    expense += Number(item.amount);
                }
            })
        })
        setTotalExpense(expense);
        setTotalIncome(income);
    }, [props.bills])
 
    return (
        <View style={styles.container}>
            {/* logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/moneymindsetlogo.jpg')}
                    style={styles.logo} />
                
                <View style={styles.searchAndWallet}>
                <TouchableOpacity onPress={()=>props.navigation.navigate('SearchScreen')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} size={18} color="#FFF" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity onPress={()=>props.navigation.navigate('BudgetScreen')}>
                        <FontAwesomeIcon icon={faWallet} size={18} color="#FFF" />
                    </TouchableOpacity> */}
                </View>
            </View>
            {/* left part */}
            <View style={styles.infoContainer}>
                {/* <View style={styles.leftContainer}>
                    <Text style={styles.text}>2023</Text>
                    <SelectList
                        setSelected={(val) => setSelectedListItem(val)}
                        data={calendarMonths}
                        search={false}
                        save="value"
                        boxStyles={styles.boxStyle}
                        inputStyles={styles.inputStyle}
                        dropdownStyles={styles.dropdownStyle}
                        dropdownItemStyles={styles.dropdownItemStyle}
                        dropdownTextStyles={styles.dropdownTextStyle}
                        defaultOption={{ key: '1', value: '01' }}
                    />
                </View> */}
                {/* dividingLine */}
               
                {/* right part */}
                {/* <View style={styles.rightContainer}> */}
                    <View style={styles.incomeContainer}>
                        <Text style={styles.label}>Income</Text>
                        <AppTextAmount amount={totalExpense}  />
                    </View>
                    <View style={styles.dividingLine}></View>
                    <View style={styles.expenseContainer}>
                        <Text style={styles.label}>Expense</Text>
                        <AppTextAmount amount={totalIncome} />
                    </View>
                {/* </View> */}
            </View>
        </View>
    )
}