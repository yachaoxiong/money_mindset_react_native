import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '18%',
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
        fontSize: 17,
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
    totalAndDebt_text: {
        color: 'white',
        fontSize: 10,
    },
    totalAndDebtAmount_text: {
        color: 'white',
        fontSize: 13,
        fontWeight:'bold'
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