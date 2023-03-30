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

    const calculateTotalAmountAndAverage = () => {
        let totalAmount = 0;
        let averageAmount = 0;
        item.billItems.forEach(billItem => {
            if(currentSection === 'Expense' && billItem.name === 'Expense'){
                totalAmount+=Number(billItem.amount);
            }else if(currentSection === 'Income' && billItem.name === 'Income'){
                totalAmount+=Number(billItem.amount);
            }
        });
        if(currentPeriod === 'WEEK'){
            averageAmount = totalAmount/7;
        }else if(currentPeriod === 'MONTH'){
            const numDays = moment(`${Number(item.billItems[0].yearNumber)}-${Number(item.billItems[0].monthNumber)+1}-01`, 'YYYY-MM-DD').daysInMonth();
            averageAmount = totalAmount/numDays;
        }else{
            const numDays = moment(`${Number(item.billItems[0].yearNumber)}-12-31`, 'YYYY-MM-DD').dayOfYear();
            averageAmount = totalAmount/numDays;
            console.log("item.yearNumber is:"+Number(item.billItems[0].yearNumber));
        }
        return [totalAmount,averageAmount];
    }
    const [totalAmount,averageAmount] = calculateTotalAmountAndAverage();

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.periodHeader_text}>{formatHeaderDate()}</Text>
            <Text style={styles.subHeader_text}>Total</Text>
            <Text style={styles.amount_text}>${totalAmount.toFixed(2)}</Text>
            <Text style={styles.subHeader_text}>Average</Text>
            <Text style={styles.amount_text}>${averageAmount.toFixed(2)}/day</Text>
        </TouchableOpacity>
    )
}