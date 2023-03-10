import { View,Text } from 'react-native';
import styles from './styles/appNewFlowTypeItemStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default AppNewFlowTypeItem = (props) => {
    return (
        <View style={styles.tab}>
            <View style={styles.menuItem}>
                <FontAwesomeIcon {...props}/>
            </View>
            <Text style={styles.menuText}>{props.text}</Text>
        </View>
    )
}