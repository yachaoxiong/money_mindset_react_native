import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '4%',
        width: '100%',
        backgroundColor: '#DA0452',
        marginTop:50
    },
    returnButton:{
        marginLeft:20
    },
    header:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingLeft:70,
        paddingRight:70
    },
    headerText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    },
    selected:{
        borderColor:'white',
        borderWidth:1,
        padding:10,
        backgroundColor:'white',
        height:50,
    },
    unselected:{
        borderWidth:0,
        padding:10,
        backgroundColor:'#DA0452',
        height:50,
    },
    selectedText:{
        color:'red',
        fontWeight:'bold',
        fontSize:18
    },
    unselectedText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})