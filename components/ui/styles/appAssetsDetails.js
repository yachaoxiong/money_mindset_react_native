import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
   
    },
    leftSection:{
        display:'flex',
        flexDirection:'row'
    },
    listItem:{
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginTop:20
    },
    horizonalLine:{
      height:1,
      width:'100%',
      backgroundColor:'#D9D9D9',
      marginTop:10
  },
})