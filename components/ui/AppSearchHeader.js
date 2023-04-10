import React, { useState } from 'react';
import { View, TouchableOpacity,Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchBar } from 'react-native-elements';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appSearchHeaderStyle';

export default AppSearchHeader = (props) => {
    const { searchParams, setSearchParams } = props
   
    const navigation = useNavigation()


    const returnToHomeScreen = () => {
        navigation.navigate('BottomNavigationTabs', {
            screen: 'HomeScreen'
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header_text}>Search Record</Text>
                <TouchableOpacity
                        style={styles.returnIcon}
                        onPress={returnToHomeScreen}>
                        <FontAwesomeIcon icon={faCircleLeft} size={25} color="#FFF"/>
                </TouchableOpacity>
            </View>
            <SearchBar
                placeholder="Type Here..."
                onChangeText={(params)=>setSearchParams(params)}
                value={searchParams}
                containerStyle={styles.containerStyle}
                inputContainerStyle={styles.inputContainerStyle}
                inputStyle={styles.inputStyle}
            />
        </View>
    )
}