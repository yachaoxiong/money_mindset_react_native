import React from 'react';
import {View,Text, TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsDetails from './AppAssetsDetails';
import styles from './styles/appAssetsDetailsCardStyle';

export default AppAssetsDetailsCard = (props) => {
    const {_id,assetsItems} = props.asset;
    const screenWidth = Dimensions.get('window').width;
    console.log('assetsItems:',assetsItems)

    const totalAmount = () => {
        let totalAmount = 0;
        assetsItems.forEach((item)=>{
            totalAmount+=Number(item.amount);
        });
        return totalAmount;
    }

    return (
        <TouchableOpacity style={[styles.container,{width:screenWidth*0.8}]}>
            {/* category header */}
            <View style={styles.header}>
                <Text style={styles.text}>{_id}</Text>
                <Text style={styles.text}>${totalAmount()}</Text>
            </View>
            {/* horizontal dividing line */}
            <View style={styles.horizonalLine}></View>
            {/* assets details section*/}
            <View style={styles.assetsDetailsContainer}>
                {assetsItems.map((item,index)=>{
                    return <AppAssetsDetails item={item} key={index}/>
                })}                
            </View>
            {/* Add New Button */}
        </TouchableOpacity>
    )
}