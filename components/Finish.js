import React from "react";
import {Text, StyleSheet} from "react-native";
import QuizScreen from "./QuizScreen";

const Finish = props => {
    return(
        <QuizScreen>
            <Text style={styles.font}>Congrat!!!</Text>
            <Text style={styles.font}>You made a good job. You deverse to receive a gift from Santa Claus. Are you ready to open it?</Text>
            <Button title="Open" onPress={props.onPress} />
        </QuizScreen>
    )
}

const styles = StyleSheet.create({
    font: {
      fontFamily: "hp-theme" 
    }
})

export default Finish;