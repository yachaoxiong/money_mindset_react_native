import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appBillDetailsStyle';

export default AppBillDetails = (props) => {

    const { month, income, expense, balance } = props.monthDetail;
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.billDetailContainer}>
                <Text>{month}</Text>
                <Text>{income}</Text>
                <Text>{expense}</Text>
                <Text>{balance}</Text>
                <FontAwesomeIcon icon="fa-solid fa-circle-dollar" />
            </View>
            <View style={styles.horizontalLine}></View>
        </TouchableOpacity>
    )
}