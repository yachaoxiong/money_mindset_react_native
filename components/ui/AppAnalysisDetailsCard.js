import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles/appAnalysisDetailsCardStyle';

export default AppAnalysisDetailsCard = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.periodHeader_text}>March</Text>
            <Text style={styles.subHeader_text}>Total</Text>
            <Text style={styles.amount_text}>0</Text>
            <Text style={styles.subHeader_text}>Average</Text>
            <Text style={styles.amount_text}>0.00</Text>
        </TouchableOpacity>
    )
}