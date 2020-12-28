import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Theme from "../assets/colors/Theme";

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Welcome To 9 ¾</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 80,
        paddingTop:34,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Theme.theme,
    },
    headerTitle: {
        color: Theme.carot,
        fontSize:30,
        fontFamily: "hp-theme-second",
    }
})

export default Header;

