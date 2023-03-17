import { View, ScrollView, SafeAreaView, TouchableOpacity, Button, TextInput, Text } from 'react-native';
import React, { useState, useRef } from 'react';
import { getTodayDate, getToken } from '../utils/functions';
import { useNavigation } from '@react-navigation/native';
import AppAddNewFlowHeader from '../components/ui/AppAddNewFlowHeader';
import AppNewFlowTypeItem from '../components/ui/AppNewFlowTypeItem';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import AppCustomizedInput from '../components/ui/AppCustomizedInput';
import { expenseType, incomeType } from '../utils/static';
import styles from './styles/useNewFlow';

export default AddNewFlowScreen = () => {

    const [currentSection, setCurrentSection] = useState('Expense');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(getTodayDate());
    const [notes, setNotes] = useState('');
    const [selectedType, setSelectedType] = useState('');

    const navigation = useNavigation();

    const submit = async () => {
        const token = await getToken();
        if (!token) return;
        return fetch('http://localhost:5000/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': 'Bearer ' + token
            },
            body: JSON.stringify({
                name: currentSection,
                amount: amount,
                billType: selectedType,
                iconName: "food",
                billDate: date
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.log("in error???");
                console.error(error);
            });
    }

    const navigateToDatePickScreen = () => {
        navigation.navigate('DatePickerScreen', { setDate: setDate });
    }

    const handleDate = (date) => {
        return date.substr(1, 10);
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                <AppAddNewFlowHeader setCurrentSection={setCurrentSection} currentSection={currentSection} />
                <ScrollView style={styles.content}>
                    <View style={styles.options}>
                        {currentSection === "Expense" ? expenseType.map((item, index) => {
                            return (
                                <View style={styles.option} key={index}>
                                    <AppNewFlowTypeItem icon={item.icon} size={25} text={item.text} selectedType={selectedType} setSelectedType={setSelectedType} />
                                </View>
                            )
                        }) : incomeType.map((item, index) => {
                            return (
                                <View style={styles.option} key={index}>
                                    <AppNewFlowTypeItem icon={item.icon} size={25} text={item.text} selectedType={selectedType} setSelectedType={setSelectedType} />
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.detailsInfo_container}>
                        <View style={styles.line}></View>
                        <View style={styles.amountAndDateInputField}>
                            <AppCustomizedInput
                                placeholder="Amount"
                                onChangeText={text => setAmount(text)}
                                width={160}
                                height={40}
                            />
                            <View style={styles.datePickerContainer}>
                                <TouchableOpacity
                                    onPress={() => navigateToDatePickScreen()}>
                                    <FontAwesomeIcon icon={faCalendar} size={30} color='red' />
                                </TouchableOpacity>
                                <TextInput style={styles.textInput_date} editable={false}>{handleDate(date)}</TextInput>
                            </View>
                        </View>
                        <AppCustomizedInput
                            placeholder="Notes"
                            value={notes}
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
                            {/* <Text>Submit</Text> */}
                            {/* <Button title="Submit" color="white" /> */}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
