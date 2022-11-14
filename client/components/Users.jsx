import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ListItem, StyleSheet } from 'react-native';
import MyButton from './MyButton';
import UserDisplay from './ListItem';

import { settings } from './Settings'

function Users({ navigation }) {

    const [users, setUsers] = useState([])

    const updateUsers = () => {
        fetch(`${settings.ip}:${settings.port}/getUsers`, { method: 'POST', body: "" })
            .then(res => res.json()).then(data => { setUsers(data) }).catch(err => console.log(err))
    }

    useEffect(() => {
        fetch(`${settings.ip}:${settings.port}/getUsers`, { method: 'POST', body: "" })
            .then(res => res.json()).then(data => { setUsers(data) }).catch(err => console.log(err))
    }, []);

    return (
        <View style={styles.container}>
            <MyButton title="Back to login Page" onPress={() => navigation.navigate('register')} />
            <FlatList data={users} renderItem={({ item }) => <UserDisplay id={item.id} login={item.login} password={item.password} date={item.date} updateUsers={updateUsers} navigation={navigation} />} />
        </View>
    );
}

export default Users;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});