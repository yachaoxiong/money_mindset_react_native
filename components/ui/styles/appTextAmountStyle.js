import getAppStyle from '../../../common/styles'
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingTop: 10,
  },
  amount: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountSmall: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 1
  },
});
