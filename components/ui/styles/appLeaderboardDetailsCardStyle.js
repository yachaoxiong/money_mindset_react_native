import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
    },
    icon: {},
    progressContainer: {
        marginLeft: 10,
        marginTop: 10
    },
    headerInfo: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBar: {
        height: 7,
        backgroundColor: '#DA0452',
        borderRadius: 7
    },
    horizontalLine: {
        width: '100%',
        height: .8,
        marginTop: 20,
        borderWidth: .8,
        borderColor: '#F0F3F4',
    }
})