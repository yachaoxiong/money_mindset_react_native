import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        padding:12
    },
    transactionHeaderContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    date:{},
    dateText:{
        color:"#575757"
    },
    incomeText:{
        color:"#939393",
        fontSize:12
    },
    horizonalDividingLine:{
        marginTop:10,
        borderWidth:.8,
        borderColor:'#CACFD2'
    }
})