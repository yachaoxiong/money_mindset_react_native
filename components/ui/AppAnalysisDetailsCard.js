import React from 'react';
import moment from 'moment';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles/appAnalysisDetailsCardStyle';

export default AppAnalysisDetailsCard = (props) => {
    const { item, currentPeriod, currentSection } = props;
    // console.log(item);

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
            if(currentSection === 'Expense' && billItem.billType === 'Expense'){
                totalAmount+=Number(billItem.amount);
            }else if(currentSection === 'Income' && billItem.billType === 'Income'){
                totalAmount+=Number(billItem.amount);
            }
        });
        if(currentPeriod === 'WEEK'){
            averageAmount = totalAmount/7;
        }else if(currentPeriod === 'MONTH'){
            averageAmount = totalAmount/4;
        }else{
            averageAmount = totalAmount/12;
        }
        return [totalAmount.toFixed(2),averageAmount.toFixed(2)];
    }
    const [totalAmount,averageAmount] = calculateTotalAmountAndAverage();

    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.periodHeader_text}>{formatHeaderDate()}</Text>
            <Text style={styles.subHeader_text}>Total</Text>
            <Text style={styles.amount_text}>${totalAmount}</Text>
            <Text style={styles.subHeader_text}>Average</Text>
            <Text style={styles.amount_text}>
                {currentPeriod==='WEEK'?'$'+averageAmount+"/day":currentPeriod==='MONTH'?'$'+averageAmount+"/week":'$'+averageAmount+"/month"}
            </Text>
        </TouchableOpacity>
    )
}