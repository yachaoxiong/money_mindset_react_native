import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import styles from './styles/appPeriodButtonStyle';

export default AppPeriodButton = (props) => {

    const {title, currentTitle, setCurrentTitle} = props;

    return (
        <TouchableOpacity style={currentTitle == title?styles.touchableOpacity_selected : styles.touchableOpacity_unselected} 
            onPress={()=>setCurrentTitle(title)}>
            <Text style={ currentTitle == title?styles.text_selected : styles.text_unselected}>{title}</Text>
        </TouchableOpacity>
    )
}