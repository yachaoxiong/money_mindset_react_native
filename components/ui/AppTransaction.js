import { View, Text } from 'react-native'
import AppTransactionDetails from '../ui/AppTransactionDetail'
import styles from './styles/appTransactionStyle'

export default function AppTransaction(props) {

    const { date, year, income, expense, transactions } = props.transaction;

    return (
        <View style={styles.container}>
            <View style={styles.transactionHeaderContainer}>
                <View style={styles.date}>
                    <Text style={styles.dateText}>{date} {year}</Text>
                </View>
                <View style={styles.incomeAndExpense}>
                    <Text style={styles.incomeText}>Income: {income}    Expense: {expense}</Text>
                </View>
            </View>
            <View style={styles.horizonalDividingLine}></View>
            {transactions.map((item) => {
                return <AppTransactionDetails item={item} />
            })}
        </View>
    )
}