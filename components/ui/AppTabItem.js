import { View,Text } from 'react-native';
import styles from './styles/appTabItemStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default AppTabItem = (props) => {
    return (
        <View style={props.icon === faCirclePlus ? styles.circleTab : styles.tab}>
            <View style={styles.menuItem}>
                <FontAwesomeIcon {...props}/>
                {props.text ? <Text style={styles.menuText}>{props.text}</Text> : null}
            </View>
        </View>
    )
}