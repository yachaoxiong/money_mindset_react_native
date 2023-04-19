import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AppNewAssetsTextInputField from './AppNewAssetsTextInputField';
import styles from './styles/appAddNewAssetsDetailsModel';

export default AppAddNewAssetsDetailsModel = (props) => {
    const {tab, setTab, setBank, setLast4Digits,setNote,setAmount,setErrorMessage,errorMessage,submit} = props;
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container,{width:screenWidth*0.8,marginLeft:screenWidth*0.1}]}>
            <View style={styles.headerContainer}>
                <View></View>
                <Text style={styles.header_text}>Add New</Text>
                <TouchableOpacity onPress={()=>{setTab('');setErrorMessage('')}}>
                    <FontAwesomeIcon icon={faXmark} size={15} color="#000"/>
                </TouchableOpacity>
            </View>
            <View style={styles.newAssetsCategory}>
                <AppNewAssetsTextInputField header = "Category" tab={tab}/>
                {(tab == 'Cash' || tab == 'Debt')?null:<AppNewAssetsTextInputField header = "Bank" tab={tab} onChange={text=>setBank(text)}/>}
                {(tab == 'Cash' || tab == 'Debt')?null:<AppNewAssetsTextInputField  header = "Last 4 digits" tab={tab} onChange={text=>setLast4Digits(text)}/>}
                <AppNewAssetsTextInputField header = "Note" tab={tab} onChange={text=>setNote(text)}/>
                <AppNewAssetsTextInputField header = "Amount" tab={tab} onChange={text=>setAmount(text)}/>
            </View>
            {errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text>}
            <TouchableOpacity style={styles.submitButton} onPress={()=>submit()}>
                <Text style={styles.submit_text}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}