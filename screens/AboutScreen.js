import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/useAboutStyle'

export default AboutScreen = () => {
    const navigation = useNavigation();
    const onPress = () => {
        navigation.navigate('LoginScreen', {})
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={{color:'white',fontWeight:'bold'}}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}
