import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { calendarYear } from '../../utils/static';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons'
import AppTextAmount from './AppTextAmount';
import styles from './styles/appBillHeaderStyle';

export default AppBillHeader = () => {

    const [selectedListItem, setSelectedListItem] = React.useState("");
    const navigation = useNavigation()

    const returnToHomeScreen = () => {
        navigation.navigate('BottomNavigationTabs', {
            screen: 'HomeScreen'
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.topHeaderContainer}>
                <View style={styles.calendar}>
                    <SelectList
                        setSelected={(val) => setSelectedListItem(val)}
                        data={calendarYear}
                        search={false}
                        save="value"
                        arrowicon={<FontAwesomeIcon icon={faCaretDown} size={15} color="#FFF" />}
                        boxStyles={styles.boxStyle}
                        inputStyles={styles.inputStyle}
                        dropdownStyles={styles.dropdownStyle}
                        dropdownItemStyles={styles.dropdownItemStyle}
                        dropdownTextStyles={styles.dropdownTextStyle}
                        defaultOption={{ key: '1', value: '2023' }}
                    />
                </View>
                <View>
                    <Text style={styles.textHeader}>BILL</Text>
                </View>
                <TouchableOpacity
                    onPress={returnToHomeScreen}>
                    <FontAwesomeIcon icon={faCircleLeft} size={25} color="#FFF"/>
                </TouchableOpacity>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.textCommon}>Balance</Text>
                <AppTextAmount amount={7070.37} amountSize={30}/>
            </View>
            <View style={styles.incomeAndExpenseContainer}>
                <View style={styles.incomeAndExpense}>
                    <Text style={styles.textCommon}>Income</Text>
                    <AppTextAmount amount={8276.31} amountSize={20}/>
                </View>
                <View style={styles.dividingLine}></View>
                <View style={styles.incomeAndExpense}>
                    <Text style={styles.textCommon}>Expense</Text>
                    <AppTextAmount amount={2039.19} amountSize={20}/>
                </View>
            </View>
        </View>
    )
}