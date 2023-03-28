import { StyleSheet } from 'react-native';
// import {Appstyles} from '../../../common/styles';

export default styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginTop:15
    },
    icon: {},
    progressContainer:{
        marginLeft:10,
        marginTop:10
    },
    headerInfo: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    progressBar: {
        height:7,
        backgroundColor:'#DA0452',
        borderRadius:7
    },
    // horizontalLine:{
    //     ...AppStyles.horizontalLine,
    //     marginTop:20
    // },
})