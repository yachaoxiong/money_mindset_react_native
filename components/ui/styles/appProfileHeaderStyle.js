import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '17%',
        width: '100%',
        backgroundColor: '#DA0452',
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    userName_text:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        marginTop:10
    }
})