import { AppStyles } from '../../../common/styles';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        
    },
    totalBudgetHeader:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 15
    },
    totalBudgetHeaderContainer:{

    },
    headerTextStyle:{
        fontWeight:'bold',
        fontSize:15
    },
    horizontalLine:{
        ...AppStyles.horizontalLine
    },
    dividingLine:{
        width:'100%',
        marginTop:10,
        borderWidth:8,
        borderColor:'#F0F3F4',
    }
})