import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles/appNewAssetsTextInputFieldStyle';

export default AppNewAssetsTextInputField = () => {
    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput style={styles.textInput}></TextInput>
        </View>
    )
}