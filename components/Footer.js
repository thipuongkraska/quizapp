import React from "react";
import {View, Text, StyleSheet} from "react-native";
// import Colors from "../constant/colors";

const Footer = props => {
    return(
        <View style={styles.screen}>
            <Text style={styles.font}>@ Mail to --> Thomas Kraska</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        width: "100%",
        height: 50,
        marginBottom: 0,
        position: 'absolute',
        bottom: 0,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#6f0000",
    },
    font: {
        fontFamily: "hp-theme"
    }
})

export default Footer;