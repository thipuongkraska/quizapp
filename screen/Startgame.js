import React, {useState} from "react";
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert} from "react-native";
import Theme from "../assets/colors/Theme";
import Input from "../components/Input";

const StartGame = props => {
    const [heading, setHeading] = useState(<Text style={styles.font}>Dear Kraska!</Text>);
    const [message, setMessage] = useState(<Text style={styles.font}>Behind this, a secret Xmas gift is waiting for you. But wait!!! You need to solve this challenge first. If you are ready, enter THE SPELL to open. Are yu readyyyy???</Text>)
    const [input, setInput] = useState("");
    const [code, setCode] = useState([]);
    const focusHandler = () => {
        setMessage();
        setHeading(<Text style={styles.font}>* Hint: The answer is behind the scene</Text>)
    }
    const changeTextHandler = (e) => {
        setInput(e);
        setCode(e);
    }
    return(
    <ImageBackground style={styles.background} source={require("../assets/lumos.jpg")} blurRadius={2} >
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
        <View style={styles.screen}>
            {heading}
            {message}
            <Input onFocus={focusHandler} value={input} onChangeText={changeTextHandler}/>
            <TouchableOpacity onPress={
                () => {
                    console.log(code);
                    if(code==="LUMOS") {
                        return props.onGame();
                    } else {Alert.alert("Wrong spell!", "Read again the hint", [{text:"Try again", style:"cancel"}]); return;}
                }
            }>
                <Image source={require("../assets/fly.png")} style={styles.btn}/>
            </TouchableOpacity>
        </View>
        </TouchableWithoutFeedback>
    </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        width: "100%",
        height: "100%",  
    },
    screen: {
        marginVertical: 50,
        width: "90%",
        padding: 30,
        backgroundColor: Theme.font,
        opacity: 0.6,
        alignItems: "center",
        borderRadius: 20,
    },
    font: {
        fontSize: 18,
        fontFamily: "text",
        color: Theme.carot,
    },
    btn: {
        marginTop: 15,
        width: 50, 
        height: 50,
        borderRadius: 25,
        backgroundColor: "transparent"
    },
})

export default StartGame;