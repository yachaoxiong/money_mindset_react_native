import React from 'react';
import { View, ScrollView } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import AppTransactions from '../components/ui/AppTransactions'
import styles from './styles/useHomeStyle'
import AppBills from '../components/ui/AppBills'

export default HomeScreen = () => {

    const [selectedMenuItem, setSelectedMenuItem] = React.useState(0)
    return (
        <View style={styles.container}>
            <AppHeader/>
            <ScrollView style={styles.topMenuItemContainer}>
                {selectedMenuItem === 0 ? <AppTransactions/> : <AppBills/>}
            </ScrollView>
        </View>
    )
}

