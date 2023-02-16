import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppInput from '../components/ui/AppInput'
import AppButton from '../components/ui/AppButton'
import { useNavigation } from '@react-navigation/native';
import styles from './styles/useLoginStyle';
import { register } from '../auth/auth';

export default RegisterScreen = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();

    const handleRegister = () => {
        console.log("submit")
        if (username === '' || password === ''|| email === ''|| confirmedPassword === '') {
          setMessage('Please fill in all fields');
          return
        }
        if (password !== confirmedPassword) {
          setMessage('Passwords do not match');
          return
        }
        register(username, password, email)
            .then(res => {
                console.log("res", res)
                console.log("success")
            if (res === 'success') {
              props.navigation.navigate('Login');
            } 
          }
          ).catch(err => {
            setMessage(err.message);
          })
      }

    const loginLinkPressed = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Image
                style={styles.logo}
                source={require('../assets/register.jpg')}
            />
            <AppInput
                placeholder="username"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <AppInput
                placeholder="your email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <AppInput
                placeholder="password"
                value={password}
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
            />
            <AppInput
                placeholder="confirmed Password"
                secureTextEntry={true}
                value={confirmedPassword}
                onChangeText={text => setConfirmedPassword(text)}
            />
            <Text style={styles.message}>{message}</Text>
            <AppButton
                title="Submit"
                onPress={handleRegister}
            />
            <View style={styles.textRow}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={loginLinkPressed}>
                    <Text style={styles.link}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}