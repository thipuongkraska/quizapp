import React from "react";
import {TextInput, StyleSheet} from "react-native";

const Input = props => {
    return (
            <TextInput autoCapitalize="characters" onFocus={props.onFocus} onChangeText={props.onChangeText} value={props.value} style={{...styles.input, ...props.style}} />
    )   
}

const styles = StyleSheet.create({
    input: {
        width: 70,
        height: 50,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        marginVertical: 20,
        fontSize: 18,
        color: "white",
        fontFamily: "hp-theme",
        alignItems: "center"
    }
})

export default Input;