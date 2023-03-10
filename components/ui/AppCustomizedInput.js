import React,{ useState } from 'react'
import { TextInput, View, Text } from 'react-native';

export const AppCustomizedInput = (props) => {
    const { placeholder, value, onChangeText,color } = props;
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={styles.container}>
            <TextInput
                placeholder={placeholder}
                value={value.toString()}
                onChange = {text=>onChangeText(text)}
                onFocus = {()=>setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />
        </View>
    )
}

export default AppCustomizedInput;