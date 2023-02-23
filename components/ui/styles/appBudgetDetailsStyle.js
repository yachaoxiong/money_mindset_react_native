import { StyleSheet } from 'react-native';
import { AppStyles } from '../../../common/styles';

export default styles = StyleSheet.create({
    container: {
    },
    container_type: {
        marginTop:10
    },
    contentContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        paddingTop:5,
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:5
    },
    budgetTypeContainer:{
        display: 'flex',
        flexDirection:'row',
        marginLeft:15
    },
    progressBar:{
        width:'30%'
    },
    budgetDetailsContainer:{
        width:'70%',
        display: 'flex',
        flexDirection:'column',
        padding:10
    },
    budgetDetails:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
    balanceText: {
        fontSize:17,
        fontWeight:'bold'
    },
    dividingLine:{
        width:'100%',
        height:2,
        marginTop:10,
        borderWidth:2,
        borderColor:'#CACFD2',
    },
    horizontalLine:{
        ...AppStyles.horizontalLine
    },
})