import { View, ScrollView, SafeAreaView, TouchableOpacity, Button, Text } from 'react-native';
import React, { useContext, useState } from 'react'
import AppAddNewFlowHeader from '../components/ui/AppAddNewFlowHeader';
import AppNewFlowTypeItem from '../components/ui/AppNewFlowTypeItem';
import AppCustomizedInput from '../components/ui/AppCustomizedInput';
import { faHouse } from '@fortawesome/free-solid-svg-icons/faHouse';
import { incomeType } from '../utils/static'
import styles from './styles/useNewFlow';

export default AddNewFlowScreen = () => {

    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');

    const submit = () => {

    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAddNewFlowHeader />
                <ScrollView style={styles.content}>
                    <View style={styles.options}>
                        {incomeType.map((item,key)=>{
                            return (
                                <View style={styles.option}>
                                    <AppNewFlowTypeItem icon={item.icon} size={25} text={item.text} />
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.detailsInfo_container}>
                        <View style={styles.line}></View>
                        <View style={styles.amountAndDateInputField}>
                            <AppCustomizedInput
                                placeholder="Amount"
                                value={amount}
                                onChangeText={text => setAmount(text)}
                                width={170}
                                height={40}
                            />
                            <AppCustomizedInput
                                placeholder="Date"
                                value={amount}
                                onChangeText={text => setDate(text)}
                                width={140}
                                height={40}
                            />
                        </View>
                        <AppCustomizedInput
                            placeholder="Notes"
                            value={amount}
                            onChangeText={text => setNotes(text)}
                            width="90%"
                            height={80}
                            multiline={true}
                            marginLeft="5%"
                        />
                        <TouchableOpacity
                            style={styles.touchableOpacity_submit}
                            onPress={() => submit()}
                        >
                            <Button title="Submit" color="white" />
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
