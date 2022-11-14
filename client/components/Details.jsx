import React from 'react';
import { View, Text, TextInput, StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    tinyLogo: {
        width: 120,
        height: 120,
        margin: 5
    },
    bold: {
        fontWeight: 'bold',
        color: '#2673D0'
    }
})

function Details(props) {
    return (
        <View style={styles.container}>
            <Image style={styles.tinyLogo} source={{ uri: "https://i.imgur.com/D8sIPXK.png" }} />
            <Text>login:</Text>
            <Text style={styles.bold}>{props.route.params.login}</Text>
            <Text>password:</Text>
            <Text style={styles.bold}>{props.route.params.password}</Text>
            <Text>registered:</Text>
            <Text style={styles.bold}>{props.route.params.date}</Text>
        </View>
    );
}

export default Details;