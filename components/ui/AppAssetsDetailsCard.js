import React,{useContext} from 'react';
import { View, Text, TouchableHighlight, TouchableOpacity } from 'react-native';
import { StoreContext } from '../../store/store';
import { Dimensions } from 'react-native';
import AppAssetsDetails from './AppAssetsDetails';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteAsset } from '../../services/assetsService';
import styles from './styles/appAssetsDetailsCardStyle';
import { SwipeItem, SwipeButtonsContainer, SwipeProvider } from 'react-native-swipe-item';

export default AppAssetsDetailsCard = (props) => {
    const { _id, assetsItems } = props.asset;
    const {setIsVisible,setSelectedAsset} = props;
    const { setIsRefreshing } = useContext(StoreContext);
    const screenWidth = Dimensions.get('window').width;

    // console.log("assetsItems=",assetsItems[0]);

    const totalAmount = () => {
        let totalAmount = 0;
        assetsItems.forEach((item) => {
            totalAmount += Number(item.amount);
        });
        return totalAmount;
    }

    const handleDeleteAsset = async (itemID) => {
        console.log(itemID)
        await deleteAsset(itemID);
        setIsRefreshing(pre=>!pre)
    }

    const deleteButton = (itemID) => {
        return <SwipeButtonsContainer style={styles.swipeButtonsContainer}>
            <TouchableHighlight style={styles.swipeButton} onPress={() => handleDeleteAsset(itemID)}>
                <FontAwesomeIcon icon={faTrash} size={20} color="red" />
            </TouchableHighlight>
        </SwipeButtonsContainer>
    }

    const handlePress = (item) => {
        setIsVisible(true);
        setSelectedAsset(item);
    }

    return (
        <View style={[styles.container, { width: screenWidth * 0.8 }]}>
            {/* category header */}
            <View style={styles.header}>
                <Text style={styles.text}>{_id}</Text>
                <Text style={styles.text}>${totalAmount()}</Text>
            </View>
            {/* horizontal dividing line */}
            <View style={styles.horizonalLine}></View>
            {/* assets details section*/}
            <View style={styles.assetsDetailsContainer}>
                <SwipeProvider>
                    {assetsItems.map((item, index) => {
                        if (index !== assetsItems.length - 1 && item.tab !== 'Cash' && item.tab !== 'Debt') {
                            return (
                                <SwipeItem 
                                    key={index}  
                                    swipeContainerStyle={styles.swipeContentContainerStyle}
                                    rightButtons={deleteButton(item._id)}>
                                    <TouchableOpacity onPress={()=>handlePress(item)}>
                                        <AppAssetsDetails item={item}/>
                                    </TouchableOpacity>
                                </SwipeItem>
                            )
                        }
                        return  <SwipeItem 
                                    key={index}  
                                    swipeContainerStyle={styles.swipeContentContainerStyle}
                                    rightButtons={deleteButton(item._id)}>
                                    <TouchableOpacity onPress={()=>handlePress(item)}>
                                        <AppAssetsDetails item={item}/>
                                    </TouchableOpacity>
                                </SwipeItem>
                    })}
                </SwipeProvider>
            </View>
            {/* Add New Button */}
        </View>
    )
}