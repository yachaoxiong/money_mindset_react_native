import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appBudgetDetailsStyle';

export default AppBudgetDetails = (props) => {

    const { balance, expense, budget, value, size, type } = props;
    console.log("balance="+Number(balance));
    return (
        <View style={ type?styles.container_type:styles.container}>
            {type ? <View style={styles.budgetTypeContainer}>
                <FontAwesomeIcon icon={faGift} size={15} color='red'/>
                <Text style={{marginLeft:10,fontWeight:'bold'}}>{type}</Text>
            </View> : null}
            <View style={styles.contentContainer}>
                <View style={styles.progressBar}>
                    <CircularProgress
                        value={value}
                        radius={size}
                        valueSuffix={'%'}
                        progressValueColor={'#000'}
                        activeStrokeColor={'#DA0452'}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={15}
                    />
                </View>
                <View style={styles.budgetDetailsContainer}>
                    <View style={styles.budgetDetails}>
                        <Text style={styles.balanceText}>Blance</Text>
                        <Text style={styles.balanceText}>{balance}</Text>
                    </View>
                    <View style={styles.horizontalLine}></View>
                    <View style={styles.budgetDetails}>
                        <Text style={styles.commonText}>Total Budget</Text>
                        <Text style={styles.commonText}>{budget}</Text>
                    </View>
                    <View style={styles.budgetDetails}>
                        <Text style={styles.commonText}>Expense</Text>
                        <Text style={styles.commonText}>{expense}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.horizontalLine}></View>
        </View>
    )
}