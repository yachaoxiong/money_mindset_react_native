import { View, ScrollView, SafeAreaView, TouchableOpacity, Button, TextInput, Text } from 'react-native';
import React, { useState,useContext } from 'react';
import AppAddNewFlowHeader from '../components/ui/AppAddNewFlowHeader';
import AppNewFlowTypeItem from '../components/ui/AppNewFlowTypeItem';
import AppCustomizedInput from '../components/ui/AppCustomizedInput';
import { StoreContext } from '../store/store';
import { getTodayDate } from '../utils/functions';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { expenseType, incomeType } from '../utils/static';
import { addNewBill } from '../services/billService';
import moment from 'moment';
import styles from './styles/useNewFlow';

export default AddNewFlowScreen = () => {

    const { setIsRefreshing } = useContext(StoreContext);
    const [currentSection, setCurrentSection] = useState('Expense');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(getTodayDate());
    const [notes, setNotes] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [iconName, setIconName] = useState('');

    const navigation = useNavigation();

    console.log("today date is"+date);

    const submit = () => {
        if(!checkAmount(amount)) return;
        try {
            addNewBill({
                name: currentSection,
                amount: amount,
                billType: selectedType,
                iconName: iconName,
                billDate: handleDate(date),
                weekNumber:moment(handleDate(date)).week(),
                monthNumber:moment(handleDate(date)).month(),
                yearNumber:moment(handleDate(date)).year(),
            }).then(res => {
                console.log(res);
                setIsRefreshing(pre=>!pre)
            })
        } catch (error) {
            console.log(error.message);
        }
    }

    const checkAmount = (amount) => {
        return true;
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
                                    <AppNewFlowTypeItem icon={item.icon} size={25} text={item.text} iconName={item.iconName} selectedType={selectedType} setSelectedType={setSelectedType} setIconName={setIconName} />
                                </View>
                            )
                        }) : incomeType.map((item, index) => {
                            return (
                                <View style={styles.option} key={index}>
                                    <AppNewFlowTypeItem icon={item.icon} size={25} text={item.text} iconName={item.iconName} selectedType={selectedType} setSelectedType={setSelectedType} setIconName={setIconName} />
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
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: '18' }}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
