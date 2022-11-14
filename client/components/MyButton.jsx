import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

function MyButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.btn}>
            <Text style={styles.text}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btn: {
        elevation: 8,
        backgroundColor: "#2673D0",
        margin: 10,
        borderRadius: 45,
        paddingVertical: 3,
        paddingHorizontal: 15
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }
});

export default MyButton;