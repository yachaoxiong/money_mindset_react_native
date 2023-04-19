import React, {useState,useContext,useEffect} from 'react';
import { StoreContext } from '../store/store';
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity, TouchableHighlight } from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsHeader from '../components/ui/AppAssetsHeader';
import AppAddNewAssetsModel from '../components/ui/AppAddNewAssetsModel';
import AppAssetsDetailsCard from '../components/ui/AppAssetsDetailsCard';
import AppAddNewAssetsDetailsModel from '../components/ui/AppAddNewAssetsDetailsModel';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark, faTrash } from '@fortawesome/free-solid-svg-icons';
import { addNewAssets, updateAsset } from '../services/assetsService';
import AppInput from '../components/ui/AppInput';
import AppButton from '../components/ui/AppButton';
import useAssets from '../hooks/useAssets';
import Modal from "react-native-modal";
import styles from './styles/useAssetsStyle';

export default AssetsScreen = () => {
    const [openAddNewModel, setOpenAddNewModel] = useState(false);
    const { setIsRefreshing } = useContext(StoreContext);
    const [isVisible, setIsVisible] = useState(false);
    const [tab,setTab] = useState('');
    const [selectedAsset, setSelectedAsset] = useState('');
    const [bank, setBank] = useState('');
    const [last4Digits,setLast4Digits] = useState('');
    const [note, setNote] = useState('');
    const [amount, setAmount] = useState('');
    const [itemtab, setItemtab] = useState('');
    const [itemAmount,setItemAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const screenHeight = Dimensions.get('window').height;
    const assets = useAssets();
    
    // console.log("assets=",assets);

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

    const handleUpdateAsset = async () => {
        console.log("selectedAsset is",selectedAsset);
        selectedAsset.amount = +itemAmount;
        await updateAsset(selectedAsset);
        setIsVisible(false);
    }

    useEffect(() => {
        selectedAsset && setItemtab(selectedAsset.tab)
        selectedAsset && setItemAmount(selectedAsset.amount.toString());
    }, [selectedAsset])

    return (
        <View style={styles.container}>
            <SafeAreaView>
                 {/* Header */}
                <AppAssetsHeader assets={assets}/>
                {/* Assets Details */}
                <View style={openAddNewModel || tab !== '' ?styles.content_alt:styles.content}>
                    <ScrollView style={{marginBottom:280}}>
                        {assets.map((asset,index)=>{
                            return <AppAssetsDetailsCard asset={asset} key={index} setIsVisible={setIsVisible} setSelectedAsset = {setSelectedAsset}/>
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
            <Modal isVisible={isVisible}>
                <View style={styles.modalContainer}>
                    <TouchableHighlight onPress={() => setIsVisible(false)} style={styles.closeButton}>
                        <FontAwesomeIcon icon={faXmark} size={20} color="white" />
                    </TouchableHighlight>
                    <AppInput value={itemtab}  onChangeText={text=>setItemtab(text)} editable={false}/>
                    <AppInput value={itemAmount} onChangeText={text=>setItemAmount(text)} />
                    <AppButton title="Save"  onPress={handleUpdateAsset} />
                </View>
            </Modal>
        </View>
    )
}

