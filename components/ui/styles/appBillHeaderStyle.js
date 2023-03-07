import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '20%',
        width: '100%',
        backgroundColor: '#DA0452'
    },
    topHeaderContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        zIndex:2,
        paddingLeft:10,
        paddingRight:15
    },
    calendar:{
        width:'10%'
    },
    // Dropdpwn list component style
    // Begins
    boxStyle: {
        width:90,
        borderWidth:0,
    },
    inputStyle: {
        color:'#FFF',
        fontWeight:'bold',
        fontSize:16
    },
    dropdownStyle: {
        width:90,
        borderWidth:0,
        opacity: 1,
        width:70,
    },
    dropdownItemStyle: {
        width:90,
        backgroundColor:"#DA0452",
        borderWidth:0,
    },
    dropdownTextStyle: {
        color:'#FFF',
        fontWeight:'bold'
    },
    // Dropdpwn list component style
    // Ends
    textHeader:{
        fontSize:20,
        fontWeight:'bold',
        color:'#FFF'
    },
    returnButton:{
        marginRight:30
    },
    balanceContainer:{
        display:'flex',
        alignItems:'center',
        marginTop:6,
        marginLeft:10
    },
    textCommon:{
        fontSize:12,
        color:"#FFF",
        fontWeight:'bold',
        marginBottom:-10,
        marginRight:5,
        marginTop:5
    },
    incomeAndExpenseContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:30,
        paddingRight:30,
        marginTop:15
    },
    incomeAndExpense:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },
    dividingLine: {
        width:.8,
        height:35,
        borderWidth:.8,
        borderColor:'#FFF',
    },
})