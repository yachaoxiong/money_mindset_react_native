import React, {useState,useContext} from 'react';
import { StoreContext } from '../store/store';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsHeader from '../components/ui/AppAssetsHeader';
import AppAddNewAssetsModel from '../components/ui/AppAddNewAssetsModel';
import AppAssetsDetailsCard from '../components/ui/AppAssetsDetailsCard';
import AppAddNewAssetsDetailsModel from '../components/ui/AppAddNewAssetsDetailsModel';
import { addNewAssets } from '../services/assetsService';
import useAssets from '../hooks/useAssets';
import styles from './styles/useAssetsStyle';

export default AssetsScreen = () => {
    const [openAddNewModel, setOpenAddNewModel] = useState(false);
    const { setIsRefreshing } = useContext(StoreContext);
    const [tab,setTab] = useState('');
    const [bank, setBank] = useState('');
    const [last4Digits,setLast4Digits] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const screenHeight = Dimensions.get('window').height;
    const assets = useAssets();
    
    console.log("assets=",assets);

    const submit = () => {
        if(tab === 'Cash' || tab === 'Debt'){
            if(note === '' || amount === ''){ 
                setErrorMessage('Please fill out all of the fields.');
                return;
            }
        }else{
            if(bank === '' || last4Digits === '' || note === '' || amount === ''){ 
                setErrorMessage('Please fill out all of the fields.');
                return;
            }
        }

        if(isNaN(Number(amount))){
            setErrorMessage('Please enter a valid amount');
            return;
        }

        addNewAssets({
            tab: tab,
            bank: bank,
            last4digits: last4Digits,
            note: note,
            amount:Number(amount),
        }).then(res => {
            setTab('');
            setIsRefreshing(pre=>!pre)
        }).catch(err => {
            console.log("add new bill error", err);
        })
    }

    return (
        <View style={styles.container}>
            <SafeAreaView>
                 {/* Header */}
                <AppAssetsHeader />
                {/* Assets Details */}
                <View style={openAddNewModel || tab !== '' ?styles.content_alt:styles.content}>
                    <ScrollView style={{marginBottom:350}}>
                        {assets.map((asset,index)=>{
                            return <AppAssetsDetailsCard asset={asset} key={index}/>
                        })}
                    </ScrollView>
                </View>
                {/* Add New button */}
                <TouchableOpacity 
                    style={[styles.addNewButton, { marginTop: screenHeight * 0.83 }]}
                    onPress={()=>setOpenAddNewModel(pre=>!pre)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>+  Add New</Text>
                </TouchableOpacity>
                {/* Add new assets model */}
                {openAddNewModel?<AppAddNewAssetsModel setOpenAddNewModel={setOpenAddNewModel} setTab={setTab}/>:null}
                {/* Add new assets details model */}
                {tab !==''?<AppAddNewAssetsDetailsModel 
                    tab={tab} 
                    setTab={setTab}
                    setBank={setBank}
                    setLast4Digits={setLast4Digits}
                    setNote={setNote}
                    setAmount={setAmount}
                    setErrorMessage={setErrorMessage}
                    errorMessage={errorMessage}
                    submit={submit}/>:null}
            </SafeAreaView>
        </View>
    )
}

