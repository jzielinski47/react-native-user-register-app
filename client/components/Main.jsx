import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { settings } from './Settings'
import MyButton from './MyButton';

function Main({ navigation }) {

    const [login, setLogin] = useState('username')
    const [password, setPassword] = useState('password')

    function registerUser() {
        const data = { login: login, password: password, date: new Date().toLocaleString() }

        const fetchSetup = {
            method: 'POST',
            body: JSON.stringify(data)
        }

        const runServerRequest = () => {
            return fetch(`${settings.ip}:${settings.port}/register`, fetchSetup).then(res => res.text())
                .then((data) => {
                    switch (data) {
                        case 'registered': navigation.navigate('admin'); break;
                        case 'userexists': alert('server-response: ' + data.toString()); break;
                    }
                }).catch(error => console.error(error));
        }

        runServerRequest()
        console.log(settings.ip)

    }

    return (
        <View style={styles.container}>
            <View style={styles.cover}>
                <Text style={styles.header}>Register App</Text>
            </View>
            <View style={styles.content}>
                <Text style={{ marginBottom: 10 }}>Welcome in app!</Text>

                <TextInput style={styles.input} label="Email" onChangeText={setLogin} placeholder="enter username" />
                <TextInput style={styles.input} label="Email" onChangeText={setPassword} placeholder="enter password" />
                <MyButton title="Register" onPress={() => registerUser()} />

            </View>
        </View >
    );
}

export default Main;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cover: {
        flex: 1,
        width: '100%',
        backgroundColor: '#2673D0',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 2,
        flexDirection: 'column',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        paddingHorizontal: 40,
        paddingVertical: 5,
        borderWidth: 1,
        backgroundColor: '#ffffff00',
        borderRadius: 45,
        margin: 10
    },
    header: { color: 'white', fontWeight: 'bold', fontSize: 24 },


});