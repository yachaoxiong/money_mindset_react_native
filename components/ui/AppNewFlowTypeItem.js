import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/appNewFlowTypeItemStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default AppNewFlowTypeItem = (props) => {

    const {text, setSelectedType, selectedType} = props;

    return (
        <TouchableOpacity onPress={()=>setSelectedType(text)}>
            <View style={styles.tab}>
                <View style={text === selectedType ? styles.menuItem_selected : styles.menuItem_unSelected}>
                    <FontAwesomeIcon {...props} color={text === selectedType ? 'red' : 'black'}/>
                </View>
                <Text style={styles.menuText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}