import React from 'react';
import { TouchableOpacity,Text } from 'react-native';
import styles from './styles/appPeriodButtonStyle';

export default AppPeriodButton = (props) => {

    const {title, currentPeriod, setCurrentPeriod} = props;

    return (
        <TouchableOpacity style={currentPeriod === title?styles.touchableOpacity_selected : styles.touchableOpacity_unselected} 
            onPress={()=>setCurrentPeriod(title)}>
            <Text style={ currentPeriod == title?styles.text_selected : styles.text_unselected}>{title}</Text>
        </TouchableOpacity>
    )
}