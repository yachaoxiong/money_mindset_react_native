import React from 'react';
import {View,Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './styles/appUserProfileItemStyle';

export default AppUserProfileItem = (props) => {
    const {icon,text} = props;
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={icon} size={20} color="black" />
            <Text style={styles.userName_text}>{text}</Text>
        </View>
    )
}
