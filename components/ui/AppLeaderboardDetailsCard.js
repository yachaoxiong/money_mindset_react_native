import React from 'react';
import { View, Text } from 'react-native';
import AppNewFlowTypeItem from './AppNewFlowTypeItem';
import { Dimensions } from 'react-native';
import styles from './styles/appLeaderboardDetailsCardStyle';

export default AppLeaderboardDetailsCard = (props) => {

    const {icon,type,rate,amount} = props;
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <AppNewFlowTypeItem icon = {icon}/>
            </View>
            <View style={styles.progressContainer}>
                <View style={[styles.headerInfo,{width:screenWidth*0.75}]}>
                    <Text>{type} {(rate*100).toFixed(2)+'%'}</Text>
                    <Text>${amount}</Text>
                </View>
                <View style={[styles.progressBar,{width:screenWidth*0.75*rate}]}></View>
            </View>
            
        </View>
    )
}