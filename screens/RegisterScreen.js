import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AppInput from '../components/ui/AppInput'
import AppButton from '../components/ui/AppButton'
import { useNavigation } from '@react-navigation/native';
import styles from './styles/useLoginStyle';

export default RegisterScreen = () => {
    const [userName, setUserName] = React.useState("");
    const [password, setPassword] = useState('');
    const [confirmedPassword, setConfirmedPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();

    const handleSubmit = () => {

    }

    const loginLink_Pressed = () => {
        navigation.navigate('LoginScreen', {})
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
                value={userName}
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
                onChangeText={text => setPassword(text)}
            />
            <AppInput
                placeholder="confirmedPassword"
                value={confirmedPassword}
                onChangeText={text => setConfirmedPassword(text)}
            />
            <AppButton
                title="Submit"
                onPress={handleSubmit}
            />
            <View style={styles.textRow}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableOpacity onPress={loginLink_Pressed}>
                    <Text style={styles.link}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}