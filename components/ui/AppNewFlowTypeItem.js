import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/appNewFlowTypeItemStyle';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

export default AppNewFlowTypeItem = (props) => {

    const {iconName, text, setSelectedType, selectedType, setIconName} = props;

    const setSelectedTypeAndIconName = () => {
        setSelectedType(text);
        setIconName(iconName);
    }

    return (
        <TouchableOpacity onPress={()=>setSelectedTypeAndIconName()}>
            <View style={text?styles.tab:styles.tab_static}>
                <View style={text === selectedType ? styles.menuItem_selected : styles.menuItem_unSelected}>
                    <FontAwesomeIcon {...props} color={text === selectedType ? 'red' : 'black'}/>
                </View>
                {text?<Text style={styles.menuText}>{text}</Text>:null}
            </View>
        </TouchableOpacity>
    )
}