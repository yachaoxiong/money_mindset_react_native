import React from 'react';
import {View,Text,TextInput,TouchableOpacity} from 'react-native';
import styles from './styles/appNewAssetsTextInputFieldStyle';

export default AppNewAssetsTextInputField = (props) => {
    const {tab,header,onChange} = props;
    return (
        <View style={styles.container}>
            <Text style={{fontWeight:'bold',fontSize:13}}>{header}</Text>
            <TextInput 
                editable={header==='Category'?false:true} 
                style={styles.textInput}
                onChangeText={(text)=>onChange(text)}>
                {header==='Category'?tab:''}
            </TextInput>
        </View>
    )
}