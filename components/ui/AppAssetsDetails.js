import React from 'react';
import { View, Text } from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSackDollar } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appAssetsDetails';

export default AppAssetsDetails = (props) => {
    const { note, amouunt } = props;
    const screenWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            {/* left section */}
            <View style={styles.leftSection}>
                <FontAwesomeIcon icon={faSackDollar} size={15} color="red"/>
                <Text style={{marginLeft:5}}>Part-Time</Text>
            </View>
            <View style={styles.rightSection}>
                <Text>$1211.00</Text>
            </View>
        </View>
    )
}