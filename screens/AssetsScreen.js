import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsHeader from '../components/ui/AppAssetsHeader';
import AppAssetsDetailsCard from '../components/ui/AppAssetsDetailsCard';
import AppAddNewAssetsModel from '../components/ui/AppAddNewAssetsModel';
import styles from './styles/useAssetsStyle'

export default AssetsScreen = () => {
    const screenHeight = Dimensions.get('window').height;
    return (
        <View style={styles.container}>
            <SafeAreaView>
                 {/* Header */}
                <AppAssetsHeader />
                {/* Assets Details */}
                {/* <ScrollView contentContainerStyle={styles.content}>
                    <AppAssetsDetailsCard />
                </ScrollView> */}
                {/* Add New button */}
                <TouchableOpacity style={[styles.addNewButton, { marginTop: screenHeight * 0.8 }]}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>+  Add New</Text>
                </TouchableOpacity>
                {/* Add new assets model */}
                <AppAddNewAssetsModel/>
            </SafeAreaView>
        </View>
    )
}

