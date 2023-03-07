import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '7%',
        width: '100%',
        backgroundColor: '#DA0452',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:10
    },
    header:{
        display: 'flex',
        flexDirection:'row', 
        justifyContent:'center',
    },
    headerText:{
        color:"#FFF",
        fontWeight:'bold',
        fontSize:18
    },
    returnIcon:{
        marginRight:0
    }
})