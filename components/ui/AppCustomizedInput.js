import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native';

export const AppCustomizedInput = (props) => {
    const { onChangeText, placeholderTextColor, keyboardType } = props;
    const [isFocused, setIsFocused] = useState(false);
    return (
        <TextInput
            onChangeText={text => onChangeText(text)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{
                padding: 10,
                borderRadius: 5,
                backgroundColor: "#D9D9D9",
                placeholderTextColor: props.placeholderTextColor ? placeholderTextColor : "",
                color: "#3A3B3C",
                fontSize: 18,
                keyboardType: "numeric",
                fontSize: 13
            }}
            {...props}
        />
    )
}

export default AppCustomizedInput;