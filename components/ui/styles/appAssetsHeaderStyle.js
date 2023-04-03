import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '12%',
        width: '100%',
        backgroundColor: '#DA0452',
        marginTop:10
    },
    headerContainer:{
        justifyContent:'center',
        alignItems:'center'
    },
    header_text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    balanceContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    balance_text: {
        color: 'white',
        fontSize: 10,
    },
    balanceAmount_text: {
        color: 'white',
        fontSize: 17,
        fontWeight: 'bold'
    },
    totalAndDebtContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:50,
        paddingRight:50,
        paddingTop:20
    },
    totalContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    blanceAndDebt_text: {
        color: 'white',
        fontSize: 12,
        fontWeight:'bold'
    },
    balanceAmount_text: {
        color: 'white',
        fontSize: 13,
        fontWeight:'bold',
        marginTop:5
    },
    totalAndDebtAmount_text:{
        color: 'white',
        fontSize: 13,
        fontWeight:'bold',
        marginTop:5
    },
    debtContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    verticalLine: {
        height: 30,
        width: 1,
        backgroundColor: 'white'
    }
})