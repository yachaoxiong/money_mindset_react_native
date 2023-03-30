import React, {useState} from 'react';
import { View, SafeAreaView, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';
import AppAssetsHeader from '../components/ui/AppAssetsHeader';
import AppAssetsDetailsCard from '../components/ui/AppAssetsDetailsCard';
import AppAddNewAssetsModel from '../components/ui/AppAddNewAssetsModel';
import AppAddNewAssetsDetailsModel from '../components/ui/AppAddNewAssetsDetailsModel';
import styles from './styles/useAssetsStyle'

export default AssetsScreen = () => {
    const [openAddNewModel, setOpenAddNewModel] = useState(false);
    const [tab,setTab] = useState('');
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <SafeAreaView>
                 {/* Header */}
                <AppAssetsHeader />
                {/* Assets Details */}
                <ScrollView contentContainerStyle={openAddNewModel || tab !== '' ?styles.content_alt:styles.content}>
                    <AppAssetsDetailsCard />
                    <AppAssetsDetailsCard />
                </ScrollView>
                {/* Add New button */}
                <TouchableOpacity 
                    style={[styles.addNewButton, { marginTop: screenHeight * 0.8 }]}
                    onPress={()=>setOpenAddNewModel(pre=>!pre)}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold'}}>+  Add New</Text>
                </TouchableOpacity>
                {/* Add new assets model */}
                {openAddNewModel?<AppAddNewAssetsModel setOpenAddNewModel={setOpenAddNewModel} setTab={setTab}/>:null}
                {/* Add new assets details model */}
                {tab !==''?<AppAddNewAssetsDetailsModel tab={tab} setTab={setTab}/>:null}
            </SafeAreaView>
        </View>
    )
}

