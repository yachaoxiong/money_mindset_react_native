import getAppStyle from '../../../common/styles';
import { AppStyles } from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container:{
    },
    billDetailContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop:20,
        paddingBottom:10
    },
    horizontalLine:{
        ...AppStyles.horizontalLine
    },
})