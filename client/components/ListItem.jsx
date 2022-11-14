import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';
import MyButton from './MyButton';

import { settings } from './Settings'

function UserDisplay(props) {

    const handleDelete = () => {
        const fetchSetup = { method: 'POST', body: JSON.stringify({ id: props.id }) }
        fetch(`${settings.ip}:${settings.port}/delete`, fetchSetup).then(res => res.text()).then(data => console.log(data)).catch(error => console.error(error));
        props.updateUsers()
    }

    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={{ uri: "https://i.imgur.com/D8sIPXK.png" }} />
            <Text>{props.id}:{props.login}</Text>
            <MyButton title="Details" onPress={() => props.navigation.navigate('details', { id: props.id, login: props.login, password: props.password, date: props.date })} />
            <MyButton title="Delete" onPress={handleDelete} />
        </View>
    );
}

export default UserDisplay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        margin: 5
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
})