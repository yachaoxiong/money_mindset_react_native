import React, { useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppBillHeader from '../components/ui/AppBillHeader';
import {billDetailTableHeader} from '../data/bill';
import AppBillDetails from '../components/ui/AppBillDetails';
import styles from './styles/useBillStyle';

export default function BillScreen(props) {

    const mockupBillDate = [
        {month:'03',income:'665.00',expense:'23.00',balance:'500.00'},
        {month:'04',income:'1123.00',expense:'50.00',balance:'243.00'},
        {month:'05',income:'231.00',expense:'21.00',balance:'625.00'},
        {month:'06',income:'672.00',expense:'98.00',balance:'736.00'}
    ]

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppBillHeader/>
                <View style={styles.content}>
                    <View style={styles.billDetailTableHeader}>
                        {billDetailTableHeader.map((item,key)=>{
                            return  <Text key={key} style={styles.tableHeaderText}>{item}</Text>
                        })}
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={styles.billDetailTableContainer}>
                        {mockupBillDate.map((item,index)=>{
                            return <AppBillDetails key={index} monthDetail={item}/>
                        })}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}