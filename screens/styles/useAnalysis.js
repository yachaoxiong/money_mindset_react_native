import { StyleSheet } from 'react-native';
import {AppStyles} from '../../common/styles'

export default styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#DA0452'
    },
    content:{
        height:'100%',
        backgroundColor:'white'
    },
    periodButtonContainer:{
        display: 'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        padding: 20
    },
    horizontalLine:{
        ...AppStyles.horizontalLine,
        marginTop:20
    },
    leaderboardContainer:{
        marginTop:10,
        marginLeft:10
    },
    leaderboardHeader_text:{
        color:'#DA0452',
        fontWeight:'bold',
        fontSize:18
    }
})