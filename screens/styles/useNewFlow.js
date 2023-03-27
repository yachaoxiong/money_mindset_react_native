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
    options:{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft: 30,
        paddingRight:30,
        // height:'43%'
    },
    detailsInfo_container: {
        // height:'57%'
        marginTop:90
    },
    line:{
        borderBottomColor: 'black',
        borderBottomWidth: 5,
        width: '100%',
        borderBottomColor:'#D9D9D9',
    },
    option:{
        width:'25%',
        marginTop:20
    },
    amountAndDateInputField: {
        display: "flex",
        flexDirection:'row',
        padding:20,
        justifyContent:'space-between'
    },
    touchableOpacity_submit:{
        backgroundColor:'#DA0452',
        width:'90%',
        height:40,
        marginLeft:'5%',
        marginTop:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    datePickerContainer:{
        display: "flex",
        flexDirection:"row",
        alignItems:'center'
    },
    textInput_date:{
        backgroundColor:'#D9D9D9',
        width:140,
        height:40,
        borderRadius:5,
        padding: 10
    },
    touchableOpacity_date: {
        backgroundColor:'#D9D9D9',
        width:140,
        height:40,
        borderRadius:5
    }
})