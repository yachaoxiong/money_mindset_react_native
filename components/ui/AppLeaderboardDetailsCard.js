import React from 'react';
import { View, Text } from 'react-native';
import AppNewFlowTypeItem from './AppNewFlowTypeItem';
import { Dimensions } from 'react-native';
import styles from './styles/appLeaderboardDetailsCardStyle';

export default AppLeaderboardDetailsCard = (props) => {

    const {icon,type,rate} = props;
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <AppNewFlowTypeItem icon = {icon}/>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.headerInfo,{width:screenWidth*0.75}]}>
                    <Text>{type} 33.4%</Text>
                    <Text>87</Text>
                </View>
                <View style={[styles.progressBar,{width:screenWidth*0.75*rate}]}></View>
            </View>
            
        </View>
    )
}