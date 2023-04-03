import React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appAssetsDetails';

export default AppAssetsDetails = (props) => {
    const { tab, bank, last4digits, note, amount } = props.item;
    const screenWidth = Dimensions.get('window').width;

    const ListItem = (props) => {
        const {property,value} = props;
        return (
            <View style={styles.listItem}>
                <View style={styles.leftSection}>
                    <FontAwesomeIcon icon={faSackDollar} size={15} color="red" />
                    <Text style={{ marginLeft: 5 }}>{property}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text>{(property === 'Debt' || property === 'Cash') ? '$'+ value.toString():value}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <ListItem property={note} value={amount}/>
            {(tab === 'Credit Card' || tab === 'Debit Card') ? <ListItem property="Bank" value={bank}/>:null}
            {(tab === 'Credit Card' || tab === 'Debit Card') ? <ListItem property="Last 4 digits" value={last4digits}/>:null}
        </View>
    )
}