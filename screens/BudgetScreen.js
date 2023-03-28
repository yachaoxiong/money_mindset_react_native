import React from 'react';
import { View, SafeAreaView } from 'react-native';
import AppBudgetHeader from '../components/ui/AppBudgetHeader';
import AppBudgetContent from '../components/ui/AppBudgetContent';
import styles from './styles/useBudgetStyle';

export default BudgetScreen = () => {

    const mockupdata =
    {
        year: '2023',
        month: '02',
        activity: [
            {
                type: 'Shopping',
                balance: '2000.00',
                totalBudget: '3000.00',
                expense: '1000.00'
            },
            {
                type: 'Transportation',
                balance: '300.00',
                totalBudget: '500.00',
                expense: '200.00'
            }
        ]
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppBudgetHeader />
                <View style={styles.content}>
                    <AppBudgetContent mockupdata = {mockupdata}/>
                </View>
            </SafeAreaView>
        </View>
    )
}