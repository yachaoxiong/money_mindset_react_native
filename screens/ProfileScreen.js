import React, { useContext } from 'react'
import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { removeToken } from '../utils/functions';
import { StoreContext } from '../store/store';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import AppUserProfileItem from '../components/ui/AppUserProfileItem';
import AppProfileHeader from '../components/ui/AppProfileHeader';
import styles from './styles/useProfileStyle'

{/* <FontAwesomeIcon icon={faCaretDown} size={15} color="#FFF" /> */ }

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
      <SafeAreaView>
        <AppProfileHeader />
        <View style={styles.content}>
          <AppUserProfileItem icon={faMailBulk} text="useremail@gmail.com" />
          <AppUserProfileItem icon={faCircleInfo} text="About Mindset" />
          <TouchableOpacity style={styles.button} onPress={logout}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}
