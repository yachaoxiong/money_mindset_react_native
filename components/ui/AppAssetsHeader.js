import React from 'react';
import {View,Text} from 'react-native';
import styles from './styles/appAssetsHeaderStyle';

export default AppAssetsHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header_text}>Assets Management</Text>
            </View>
            <View style={styles.balanceContainer}>
                <Text style={styles.balance_text}>Blance</Text>
                <Text style={styles.balanceAmount_text}>8762.00</Text>
            </View>
            <View style={styles.totalAndDebtContainer}>
                <View style={styles.totalContainer}>
                    <Text style={styles.totalAndDebt_text}>Total</Text>
                    <Text style={styles.totalAndDebtAmount_text}>8375.00</Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.debtContainer}>
                    <Text style={styles.totalAndDebt_text}>Debt</Text>
                    <Text style={styles.totalAndDebtAmount_text}>8375.00</Text>
                </View>
            </View>
        </View>
    )
}