import { View } from 'react-native';
import styles from './styles/appTabItemStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'

export default AppTabItem = (props) => {
    return (
        <View style={props.icon === faCirclePlus ? styles.circleTab : styles.tab}>
            <View>
                <FontAwesomeIcon {...props}/>
            </View>
        </View>
    )
}