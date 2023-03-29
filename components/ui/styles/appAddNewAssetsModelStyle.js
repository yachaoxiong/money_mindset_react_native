import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
       backgroundColor:'white',
       borderRadius:5
    },
    headerContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding:20,
    },
    header_text:{
        fontSize:20,
        color:'#DA0452',
        fontWeight:'bold'
    },
    newAssetsCategory:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:25
    }
})