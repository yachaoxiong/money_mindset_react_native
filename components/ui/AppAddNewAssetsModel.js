import React from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import { Dimensions } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import AppNewAssetsCategoryItem from './AppNewAsssetsCategoryItem';
import { newAssetsCategory } from '../../utils/static';
import styles from './styles/appAddNewAssetsModelStyle';

export default AppAddNewAssetsModel = () => {
    const screenWidth = Dimensions.get('window').width;
    return (
        <View style={[styles.container,{width:screenWidth*0.8,marginLeft:screenWidth*0.1}]}>
            <View style={styles.headerContainer}>
                <View></View>
                <Text style={styles.header_text}>Add New</Text>
                <TouchableOpacity>
                    <FontAwesomeIcon icon={faXmark} size={15} color="#000"/>
                </TouchableOpacity>
            </View>
            <View style={styles.newAssetsCategory}>
                {newAssetsCategory.map((item,index)=>{
                    return  <AppNewAssetsCategoryItem item={item} key={index}/>
                })}
            </View>
        </View>
    )
}