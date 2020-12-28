import React from "react";
import {View, StyleSheet} from "react-native";
import Theme from "../assets/colors/Theme";


const QuizScreen = props => {
    return(
        <View {...props} style={{...styles.screen, ...props.style}}>{props.children}</View>
    )
}



const styles= StyleSheet.create({
    screen: {
        marginVertical: 100,
        width: "90%",
        padding: 30,
        backgroundColor: Theme.font,
        opacity: 0.6,
        alignItems: "center",
        borderRadius: 20,
    },
})

export default QuizScreen;