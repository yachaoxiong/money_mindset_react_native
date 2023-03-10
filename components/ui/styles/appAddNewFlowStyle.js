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
        marginBottom:0,
        paddingLeft:70,
        paddingRight:70
    },
    headerText:{
        color:'white',
        fontWeight:'bold',
        fontSize:18
    }
})