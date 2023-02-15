import { StyleSheet } from 'react-native';
import getAppStyle from '../../common/styles';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    noDataContainer: {
        flex: 1,
        alignItems: "center",

    },
    nodata: {
        aspectRatio: 0.7,
        resizeMode: 'contain',
        marginTop:30
    },
})