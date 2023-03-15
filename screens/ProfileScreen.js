import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react'
import styles from './styles/useAboutStyle'
import { removeToken } from '../utils/functions';
import { StoreContext } from '../store/store';

export default ProfileScreen = () => {
   
    const { myUser, updateUser } = useContext(StoreContext);

    const logout = async () => {
      try {
        removeToken();
        updateUser(null) 
      }
      catch (err) {
        console.log(err);
      }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={logout}>
                <Text style={{color:'white',fontWeight:'bold'}}>Log out</Text>
            </TouchableOpacity>
        </View>
    )
}
