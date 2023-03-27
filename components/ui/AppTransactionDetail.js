import { View, Text, TouchableOpacity } from 'react-native';
import { iconMap } from '../../utils/static';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appTransactionDetailStyle';

export default function AppTransactionDetails(props) {
    const {billType,amount, name, iconName} = props.item;
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.activityContainer}>
                <FontAwesomeIcon icon={iconMap.get(iconName)} size={20} color="red"/>
                <Text style={styles.activityName}>{billType}</Text>
            </View>
            <View style={styles.costAndEditButton}>
                <Text style={{marginRight:20}}>{name==='Expense'?'-'+amount:amount}</Text>
                <FontAwesomeIcon icon={faPenToSquare} size={25} color="red"/>
            </View>
        </TouchableOpacity>
    )
}