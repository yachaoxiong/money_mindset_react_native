import { View, Text, TouchableOpacity } from 'react-native';
import { iconMap } from '../../utils/static';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles/appTransactionDetailStyle';

export default function AppTransactionDetails(props) {
    const { setIsVisible, setSelectedBill } = props
    const { billType, amount, name, iconName } = props.item;

    const handlePress = () => {
        setIsVisible(true);
        setSelectedBill(props.item);
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <View style={styles.activityContainer}>
                <FontAwesomeIcon icon={iconMap.get(iconName)} size={20} color="red" />
                <View style={styles.activityNameContainer}>
                    <Text style={styles.activityName}>{iconName}</Text>
                    {name && <Text style={styles.activityNameSmall}>{name}</Text>}
                </View>
            </View>
            <View style={styles.costAndEditButton}>
                <Text style={{marginRight:20}}>{billType ==='Expense'?'-'+amount:amount}</Text>
            </View>
        </TouchableOpacity>
    )
}