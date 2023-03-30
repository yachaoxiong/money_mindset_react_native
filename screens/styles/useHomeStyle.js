import { StyleSheet } from 'react-native';
import {AppStyles} from '../../common/styles'

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DA0452'
    },
    content:{
        height:'100%',
        backgroundColor:'white',
    },
    noDataContainer: {
        flex: 1,
        alignItems: "center",
    },
    nodata: {
        aspectRatio: 0.5,
        resizeMode: 'contain',
    },
    scrollView: {
        marginTop: 55
    },
    topMenuItemContainer:{
        marginBottom:336
    },
    activityContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    activityName:{
        marginLeft:20
    },
    costAndEditButton:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    transactionHeaderContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:15,
        paddingRight:15
    },
    date:{},
    dateText:{
        color:"#575757"
    },
    incomeText:{
        color:"#939393",
        fontSize:12
    },
    horizontalLine:{
        ...AppStyles.horizontalLine
    },
    transactionContainer:{
        marginTop:20,
    },
    transactionDetails:{
        paddingLeft:15,
        paddingRight: 15,        
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        width: '100%',
        display: 'flex',
        gap: 10,
    },
    closeButton: {
        position: 'absolute',
        top: -30,
        right: 10,
        color: '#DA0452',
    },

    swipeButtonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 26,
        padding: 10,
    },

    swipeContentContainerStyle: {
        flex:1,
    },
})