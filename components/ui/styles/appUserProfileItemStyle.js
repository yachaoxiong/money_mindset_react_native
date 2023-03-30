import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection:'row',
        backgroundColor:'#F5F5F5',
        padding:20,
        borderRadius:5,
        width:'90%',
        marginLeft:'5%',
        marginTop:20
    },
    userName_text:{
        marginLeft:10,
        fontWeight:'bold'
    }
})