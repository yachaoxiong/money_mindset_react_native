import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import { calendarYear } from '../../utils/static';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import AppTextAmount from './AppTextAmount';
import styles from './styles/appAddNewFlowStyle';

export default AppAddNewFlowHeader = () => {

    const navigation = useNavigation()
    const returnToHomeScreen = () => {
        navigation.navigate('BottomNavigationTabs', {
            screen: 'HomeScreen'
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Expense</Text>
                <Text style={styles.headerText}>Income</Text>
            </View>
        </View>
    )
}