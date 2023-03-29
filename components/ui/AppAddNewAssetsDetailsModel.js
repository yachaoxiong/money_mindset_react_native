import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AppNewAssetsTextInputField from './AppNewAssetsTextInputField';
import { newAssetsCategory } from '../../utils/static';
import styles from './styles/appAddNewAssetsModelStyle';

export default AppAddNewAssetsDetailsModel = (props) => {
    const {setOpenAddNewModel} = props;
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container,{width:screenWidth*0.8,marginLeft:screenWidth*0.1}]}>
            <View style={styles.headerContainer}>
                <View></View>
                <Text style={styles.header_text}>Add New</Text>
                <TouchableOpacity onPress={()=>setOpenAddNewModel(false)}>
                    <FontAwesomeIcon icon={faXmark} size={15} color="#000"/>
                </TouchableOpacity>
            </View>
            <View style={styles.newAssetsCategory}>
                <AppNewAssetsTextInputField/>
            </View>
        </View>
    )
}