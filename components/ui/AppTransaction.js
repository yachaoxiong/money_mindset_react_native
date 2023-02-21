import { View, Text } from 'react-native'
import AppTransactionDetails from '../ui/AppTransactionDetail'
import styles from './styles/appTransactionStyle'

export default function AppTransaction(props) {

    const mockUpDate = [
        {
            date:"02-15",
            year:"2023",
            income: "150",
            expense: "80",
            transactions:[
                {activity:"Phone",cost:"-150"},
                {activity:"Part-time",cost:"200"},
            ]
        },
        {
            date:"02-16",
            year:"2023",
            income: "50",
            expense: "100",
            transactions:[
                {activity:"Food",cost:"-150"},
            ]
        },
    ]

    return (
        <View style={styles.container}>
            {mockUpDate.map((item, key) => {
                return <View key={key} style={styles.transactionContainer}>
                    <View style={styles.transactionHeaderContainer}>
                        <View style={styles.date}>
                            <Text style={styles.dateText}>{item.date} {item.year}</Text>
                        </View>
                        <View style={styles.incomeAndExpense}>
                            <Text style={styles.incomeText}>Income: {item.income}    Expense: {item.expense}</Text>
                        </View>
                    </View>
                    <View style={styles.horizonalDividingLine}></View>
                    {item.transactions.map((item,key) => {
                        return <AppTransactionDetails item={item} key={key}/>
                    })}
                </View>
            })}
        </View>
    )
}