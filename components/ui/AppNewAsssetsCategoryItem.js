import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import styles from './styles/appNewAssetsCategoryItemStyle';

export default AppNewAssetsCategoryItem = (props) => {
    const {icon,text} = props.item;
    const {setTab,setOpenAddNewModel} = props;

    const openAddNewAssetsDetailsModel = (text) => {
        setTab(text);
        setOpenAddNewModel(false);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={()=>openAddNewAssetsDetailsModel(text)}>
            <FontAwesomeIcon icon={icon} size={23} color="red"/>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}