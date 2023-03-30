import React from 'react';
import moment from 'moment';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/appAnalysisDetailsCardStyle';

export default AppAnalysisDetailsCard = (props) => {
    const { item, currentPeriod, currentSection } = props;
    console.log(item);

    const formatHeaderDate = () => {
        if (currentPeriod === 'WEEK') {
            return item._id + 'th ' + item.billItems[0].billDate.substring(0, 4);
        } else if (currentPeriod === 'MONTH') {
            return moment.months(Number(item._id) - 1) + ' ' + item.billItems[0].billDate.substring(0, 4);
        } else {
            return item._id;
        }
    }

    const calculateTotalAmount = () => {
        let totalAmount = 0;
        item.billItems.forEach(billItem => {
            if(currentSection === 'Expense' && billItem.name === 'Expense'){
                totalAmount+=Number(billItem.amount);
            }else if(currentSection === 'Income' && billItem.name === 'Income'){
                totalAmount+=Number(billItem.amount);
            }
        })
        return totalAmount
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.periodHeader_text}>{formatHeaderDate()}</Text>
            <Text style={styles.subHeader_text}>Total</Text>
            <Text style={styles.amount_text}>{calculateTotalAmount()}</Text>
            <Text style={styles.subHeader_text}>Average</Text>
            <Text style={styles.amount_text}>0.00</Text>
        </TouchableOpacity>
    )
}