import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appAssetsDetails';

export default AppAssetsDetails = (props) => {
    const { tab, bank, last4digits, note, amount } = props.item;

    const ListItem = (props) => {
        const {property,value} = props;
        return (
            <View style={styles.listItem}>
                <View style={styles.leftSection}>
                    <FontAwesomeIcon icon={faSackDollar} size={15} color="red" />
                    <Text style={{ marginLeft: 5 }}>{property}{last4digits?`(${last4digits})`:null}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text>{(property === 'Debt' || property === 'Cash') ? '$'+ value.toString():value}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {(tab === 'Credit Card' || tab === 'Debit Card') ? 
                <ListItem property={bank} last4digits={last4digits} value={amount}/>:
                <ListItem property={note} value={amount}/>}
        </View>
    )
}