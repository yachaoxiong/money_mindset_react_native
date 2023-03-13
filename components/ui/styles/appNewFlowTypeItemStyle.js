import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
   tab: {
      alignItems: 'center',
      justifyContent: 'center',
      top: 0,
   },
   menuItem: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius:50,
      backgroundColor:'#D9D9D9',
      width:45,
      height:45,
   },
   menuText: {
    fontSize: 10,
    fontWeight: 'bold'
 },
})