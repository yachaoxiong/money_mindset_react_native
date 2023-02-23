import { StyleSheet } from 'react-native';
import {AppStyles} from '../../common/styles'

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DA0452'
    },
    content:{
        height:'100%',
        backgroundColor:'white'
    },
    billDetailTableHeader:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop:20,
        paddingBottom:10
    },
    tableHeaderText:{
        color:'#797D7F'
    },
    horizontalLine:{
        ...AppStyles.horizontalLine
    }
})