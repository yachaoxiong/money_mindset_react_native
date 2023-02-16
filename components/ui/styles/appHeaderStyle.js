import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        height: '30%',
        width: '100%',
        backgroundColor: '#DA0452'
    },
    logoContainer: {
        flex: 1,
        alignItems: "center",
        paddingTop: 5
    },
    logo: {
        aspectRatio: 1.3,
        resizeMode: 'contain',
        marginTop:30
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        zIndex:1,
        top:-7,
        height:70
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '25%',
        paddingBottom: 18,
        zIndex:99,
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
    label: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold'
    },
    text: {
        color:'#FFF',
        fontWeight:'bold',
        marginTop:10
    },
    dividingLine: {
        marginTop: 5,
        marginBottom: 20,
        borderWidth:.8,
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
        marginBottom:-40,
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