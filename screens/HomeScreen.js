import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import styles from './styles/useHomeStyle'
export default HomeScreen = () => {
    return (
        <View style={styles.container}>
           <AppHeader/>
           <View style={styles.noDataContainer}>
            <Image
                style={styles.nodata}
                source={require('../assets/nodata.jpg')}
                />
         </View>
        </View>
    )
}

