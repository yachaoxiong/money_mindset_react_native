import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AppInput from '../components/ui/AppInput'
import AppButton from '../components/ui/AppButton'
import styles from './styles/useLoginStyle';

export default function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();
    
    const handleLogin = () => {

    }

    const registerLink_Pressed = () => {
        navigation.navigate('RegisterScreen', {})
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
                <TouchableOpacity onPress={registerLink_Pressed}>
                    <Text style={styles.link}> Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

