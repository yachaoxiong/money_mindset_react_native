import { StyleSheet } from 'react-native';
import {AppStyles} from '../../common/styles'

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DA0452',
    },
    content:{
        height:'100%',
        backgroundColor:'white',
        alignItems: 'center',
    },
    content_alt:{
        height:'100%',
        backgroundColor:'#E5E7E9',
        alignItems: 'center',
    },
    addNewButton:{
        position:'absolute',
        width:'90%',
        backgroundColor:'#F3F3F3',
        padding:10,
        marginLeft:'5%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    submitButtonContainer:{
        justifyContent:'center',
        alignItems:'center'
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
})