import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import React,{ useContext, useState } from 'react'
import AppAddNewFlowHeader from '../components/ui/AppAddNewFlowHeader';
import AppNewFlowTypeItem from '../components/ui/AppNewFlowTypeItem';
import AppInput from '../components/ui/AppInput';
import AppCustomizedInput from '../components/ui/AppCustomizedInput';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import styles from './styles/useNewFlow';

export default AddNewFlowScreen = () => {

    const [amount, setAmount] = useState('');

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAddNewFlowHeader/>
                <View style={styles.content}>
                    <View style={styles.options}>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                        <View style={styles.option}>
                            <AppNewFlowTypeItem icon = {faHouse} size={25} text="test"/>
                        </View>
                    </View>

                    <View style={styles.line}></View>

                    <View style={styles.optionInfo}>
                        <AppCustomizedInput
                            placeholder="Amount"
                            value={amount}
                            onChangeText={text => setAmount(text)}
                            width={160}
                            height={30}
                            backgroundColor="#D9D9D9"
                            placeholderTextColor="black"
                        />
                    </View>

                </View>
            </SafeAreaView>
        </View>
    )
}
