import { View, Text } from 'react-native'
import styles from './styles/appTextAmountStyle'

export default function AppTextAmount(props) {
  const { amount, containerStyle, color, amountSize, amountSmallSize } = props
  // format amount like 1,000,000
  const amountBig = amount.toLocaleString('en-US', { maximumFractionDigits: 0 })
  //get the amount after decimal space
  const amountString = amount.toFixed(2); // round the number to 2 decimal places and convert it to a string
  const decimalIndex = amountString.indexOf('.');
  const amountAfterDecimal = amountString.substring(decimalIndex + 1);
 
  return (
    <View style={[styles.container,containerStyle]}>
      <Text style={[styles.amount, {'color':color??"#fff", 'fontSize':amountSize?? 20}]}>{amountBig}</Text>
         <Text style={[styles.amountSmall, {'color':color??"#fff", 'fontSize':amountSmallSize?? 15}]}>.{amountAfterDecimal}</Text>
    </View>
  )
}
