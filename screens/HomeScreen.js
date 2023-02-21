import { View, ScrollView } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import AppTransactions from '../components/ui/AppTransactions'
import styles from './styles/useHomeStyle'
export default HomeScreen = () => {

    return (
        <View style={styles.container}>
            <AppHeader />
            <ScrollView style={styles.topMenuItemContainer}>
                <AppTransactions/>
            </ScrollView>
        </View>
    )
}

