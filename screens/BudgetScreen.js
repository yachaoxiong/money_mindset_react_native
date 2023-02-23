import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import AppBudgetHeader from '../components/ui/AppBudgetHeader';
import styles from './styles/useBudgetStyle';

export default BudgetScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppBudgetHeader/>
                <View style={styles.content}>
                    <Text>test</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}