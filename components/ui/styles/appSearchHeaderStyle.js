import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '14%',
        width: '100%',
        backgroundColor: '#DA0452',
        marginTop:10
    },
    headerContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:10
    },
    header_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },
    returnIcon:{
        marginRight:0
    },
    containerStyle:{
        backgroundColor: '#DA0452',
        borderBottomColor:'#DA0452',
        borderTopColor:'#DA0452',
    },
    inputContainerStyle:{
        backgroundColor:'white',
        borderRadius:10
    },
    inputStyle:{
        backgroundColor:'white'
    },
})