import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      paddinng:20,
      marginTop:20
    },
    leftSection:{
        display:'flex',
        flexDirection:'row'
    }
})