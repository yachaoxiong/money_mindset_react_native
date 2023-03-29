import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsDetails from './AppAssetsDetails';
import styles from './styles/appAssetsDetailsCardStyle';

export default AppAssetsDetailsCard = () => {

    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container,{width:screenWidth*0.8}]}>
            {/* category header */}
            <View style={styles.header}>
                <Text>Cash</Text>
                <Text>$5875.00</Text>
            </View>
            {/* horizontal dividing line */}
            <View style={styles.horizonalLine}></View>
            {/* assets details section*/}
            <View style={styles.assetsDetailsContainer}>
                <AppAssetsDetails/>
                <AppAssetsDetails/>
            </View>
            {/* Add New Button */}
        </View>
    )
}