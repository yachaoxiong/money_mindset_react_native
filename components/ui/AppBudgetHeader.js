import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appBudgetHeaderStyle';

export default AppBudgetHeader = () => {
    const navigation = useNavigation()

    const returnToHomeScreen = () => {
        navigation.navigate('BottomNavigationTabs', {
            screen: 'HomeScreen'
        })
    }

    return (
        <View style={styles.container}>
            <View style={{opacity: 0, height: 0}}>
                <Text>Text</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>Month Budget</Text>
                <FontAwesomeIcon icon={faCaretDown} size={27} color="#FFF"/>
            </View>
            <TouchableOpacity
                    style={styles.returnIcon}
                    onPress={returnToHomeScreen}>
                    <FontAwesomeIcon icon={faCircleLeft} size={25} color="#FFF"/>
            </TouchableOpacity>
        </View>
    )
}