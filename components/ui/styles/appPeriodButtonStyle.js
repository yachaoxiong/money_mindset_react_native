import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    touchableOpacity_unselected: {
        backgroundColor: '#F8F4F3',
        padding: 8,
        borderRadius: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    touchableOpacity_selected: {
        backgroundColor: '#DA0452',
        padding: 8,
        borderRadius: 5,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_unselected: {
        color: '#DA0452',
        fontWeight: 'bold',
        fontSize: 17
    },
    text_selected: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    }
})