import React from 'react';
import {View,Text} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appProfileHeaderStyle';

export default AppProfileHeader = () => {
    return (
        <View style={styles.container}>
            <FontAwesomeIcon icon={faUserCircle} size={70} color="white" />
            <Text style={styles.userName_text}>UserName</Text>
        </View>
    )
}