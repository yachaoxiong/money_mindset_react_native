import { View, Text } from 'react-native'
import styles from './styles/appTransactionDetailStyle'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'

export default function AppTransactionDetails(props) {
    const {activity,cost} = props.item
    return (
        <View style={styles.container}>
            <View style={styles.activityContainer}>
                {Number(cost)>=0?<FontAwesomeIcon icon={faMoneyCheckDollar} size={20} color="red"/>
                :<FontAwesomeIcon icon={faBagShopping} size={20} color="red"/>}
                <Text style={styles.activityName}>{activity}</Text>
            </View>
            <View style={styles.cost}>
                <Text>{cost}</Text>
            </View>
        </View>
    )
}