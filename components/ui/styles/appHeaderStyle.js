import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: 200,
        width: '100%',
        backgroundColor: '#DA0452'
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",

    },
    logo: {
        aspectRatio: 1.3,
        resizeMode: 'contain',
        marginTop:30
    },
    infoContainer: {
        top:0,
        display: 'flex',
        flexDirection:'row',
    },
    leftContainer: {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'30%'
    },
    // Dropdpwn list component style
    // Begins
    boxStyle: {
        width:70,
        borderWidth:0,
    },
    inputStyle: {
        color:'#FFF',
        fontWeight:'bold'
    },
    dropdownStyle: {
        borderWidth:0,
        opacity: 1,
        width:70,
    },
    dropdownItemStyle: {
        backgroundColor:"#DA0452",
        borderWidth:0,
    },
    dropdownTextStyle: {
        color:'#FFF',
        fontWeight:'bold'
    },
    // Dropdpwn list component style
    // Ends
    text: {
        color:'#FFF',
        fontWeight:'bold',
        marginTop:10
    },
    incomeAndExpenseContainer: {
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'70%',
        paddingRight:30,
    },
    dividingLine:{
        height:60,
        width:2,
        borderWidth:2,
        borderColor:'#FFF',
        backgroundColor:'white',
    },
    rightContainer:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'70%',
        paddingLeft:30,
        paddingRight:30
    },
    menuItemContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#FFF',
        width:'70%',
        height:60,
        zIndex:99,
        marginBottom:-20,
        marginLeft:'15%',
        paddingRight:20,
        paddingLeft:20,
        borderRadius:7,
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    menuItem:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center'
    },
    menuText:{
        fontSize:10,
        fontWeight:'bold'
    }
})