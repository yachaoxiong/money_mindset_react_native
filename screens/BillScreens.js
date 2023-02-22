import React, { useState } from 'react';
import {View, Text} from 'react-native';
import AppBillHeader from '../components/ui/AppBillHeader'
import styles from './styles/useBillStyle'

export default function BillScreen(props) {
    return (
        <View style={styles.container}>
            <AppBillHeader/>
        </View>
    )
}