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
})