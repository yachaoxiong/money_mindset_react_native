import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles/appNewAssetsTextInputFieldStyle';

export default AppNewAssetsTextInputField = (props) => {
    const {tab,header} = props;
    console.log("header is:"+header);
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:13}}>{header}</Text>
            <TextInput editable={header==='Name'?false:true} style={styles.textInput} value={header==='Name'?tab:''}></TextInput>
        </View>
    )
}