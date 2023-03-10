import { StyleSheet } from 'react-native';
import {AppStyles} from '../../common/styles'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height:'50%'
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
    optionInfo:{

    }
})