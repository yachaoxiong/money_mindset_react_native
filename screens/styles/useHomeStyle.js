import { StyleSheet } from 'react-native';
import getAppStyle from '../../common/styles';

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white'
    },
    noDataContainer: {
        flex: 1,
        alignItems: "center",
    },
    nodata: {
        aspectRatio: 0.5,
        resizeMode: 'contain',
    },
    scrollView: {
        marginTop: 55
    }
})