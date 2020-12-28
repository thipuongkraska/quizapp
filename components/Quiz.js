import React from "react";
import {View, Text, Button, StyleSheet} from "react-native";
import Theme from "../assets/colors/Theme";


const Quiz = props => {
    return(
        <View>
            <Text style={styles.text}>{props.question}</Text>
            <View style={styles.btn} ><Button color={Theme.theme} title={props.ans1} value={props.val1} 
            onPress={() => props.onPress(value)}/></View>
            <View style={styles.btn} ><Button color={Theme.theme} title={props.ans2} value={props.val2} 
            onPress={() => props.onPress(value)}/></View>
            <View style={styles.btn} ><Button color={Theme.theme} title={props.ans3} value={props.val3} 
            onPress={() => props.onPress(value)}/></View>
        </View>    
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: "hp-theme"
    },
    btn: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    }
})

export default Quiz;