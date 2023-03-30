import React,{ useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppInput from '../components/ui/AppInput'
import { StoreContext } from '../store/store';
import AppButton from '../components/ui/AppButton'
import styles from './styles/useLoginStyle';
import { login } from '../auth/auth';

export default function LoginScreen(props) {

    const { updateUser } = useContext(StoreContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();
    
    const handleLogin = () => {
        if (username === '' || password === '') {
          setMessage('Please fill in all fields');
        } else {
    
          login(username, password)
            .then(res => {
              if (res.user) {
                updateUser(res.user);
                props.navigation.navigate('BottomNavigationTabs', { screen: 'Home' });
              } else {
                setMessage(res.message);
              }
            }).catch(err => {
              setMessage(err.message);
            })
        }
      }
    const registerLinkPressed = () => {
       props.navigation.navigate('Register')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <Image
                style={styles.logo}
                source={require('../assets/login.jpg')} />
            <AppInput
                placeholder="username"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <AppInput
                placeholder="password"
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry={true}
            />
            <Text style={styles.message}>{message}</Text>
            <AppButton
                title="Login"
                onPress={handleLogin}
            />
            <View style={styles.textRow}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableOpacity onPress={registerLinkPressed}>
                    <Text style={styles.link}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

