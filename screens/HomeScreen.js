import { View, ScrollView } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import AppTransaction from '../components/ui/AppTransaction'
import styles from './styles/useHomeStyle'
export default HomeScreen = () => {

    return (
        <View style={styles.container}>
            <AppHeader />
            <ScrollView style={styles.topMenuItemContainer}>
                <AppTransaction/>
            </ScrollView>
        </View>
    )
}

