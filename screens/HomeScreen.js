import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppHeader from '../components/ui/AppHeader'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons/faMugSaucer'
import styles from './styles/useHomeStyle'
import { SelectList } from 'react-native-dropdown-select-list'
export default HomeScreen = () => {

    const data = [
        { key: '1', value: 'Mobiles', disabled: true },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers', disabled: true },
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]

    return (
        <View style={styles.container}>
            <AppHeader />
            <View style={styles.noDataContainer}>
                <Image
                    style={styles.nodata}
                    source={require('../assets/nodata.jpg')}
                />
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    save="value"
                />
            </View>
        </View>
    )
}

