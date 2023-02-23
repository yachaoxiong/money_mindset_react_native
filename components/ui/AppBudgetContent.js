import React from 'react';
import { View, Text, ScrollView} from 'react-native';
import AppBudgetDetails from './AppBudgetDetails';
import styles from './styles/appBudgetContentStyle';

export default AppBudgetContent = (props) => {
    // const mockUpdata =
    // {
    //     year: '2023',
    //     month: '02',
    //     Activity: [
    //         {
    //             Type: 'Shopping',
    //             Balance: '2000.00',
    //             TotalBudget: '3000.00',
    //             Expense: '1000.00'
    //         },
    //         {
    //             Type: 'Transportation',
    //             Balance: '300.00',
    //             TotalBudget: '500.00',
    //             Expense: '200.00'
    //         }
    //     ]
    // }

    const { mockupdata } = props;
    let totalBudget = 0.00;
    let totalExpense = 0.00;
    let totalBalance = 0.00;
    mockupdata.activity.forEach(element => {
        totalBudget += Number(element.balance);
        totalExpense += Number(element.expense)
    });
    totalBalance = totalBudget - totalExpense;

    return (
        <View style={styles.container}>
            <View style={styles.totalBudgetHeaderContainer}>
                <View style={styles.totalBudgetHeader}>
                    <Text style={styles.headerTextStyle}>Total Budget</Text>
                    <Text style={styles.headerTextStyle}>02-2023</Text>
                </View>
                <AppBudgetDetails 
                    balance = {totalBalance.toFixed(2)} 
                    expense = {totalExpense.toFixed(2)}
                    budget = {totalBudget.toFixed(2)}
                    size = {45}
                    value = {totalExpense/totalBudget*100}                    
                />
                <View style={styles.dividingLine}></View>
            </View>
            <ScrollView style={styles.monthlyBudgetContainer}>
                {mockupdata.activity.map((item,index)=>{
                    return <AppBudgetDetails 
                                key={index}
                                balance = {item.balance} 
                                expense = {item.expense}
                                budget = {item.totalBudget}
                                size = {40}
                                value = {(Number(item.expense)/Number(item.totalBudget))*100} 
                                type={item.type}              
                            />
                })}
            </ScrollView>
        </View>
    )
}