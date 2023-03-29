import React from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import AppAssetsHeader from '../components/ui/AppAssetsHeader';
import styles from './styles/useAssetsStyle'

export default AssetsScreen = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAssetsHeader/>
                <ScrollView style={styles.content}>

                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

