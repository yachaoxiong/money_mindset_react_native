import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:15,
        paddingBottom:15,
        backgroundColor:"#F0F3F4",
        marginTop:10,
        borderRadius:10,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    activityContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    activityName:{
        marginLeft: 20,
        fontSize: 15,
        fontWeight:'bold'
    },
    activityNameSmall:{
        marginLeft: 20,
        fontSize: 10,
        marginTop:5
    },
    costAndEditButton:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    activityNameContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 30,
    },

})