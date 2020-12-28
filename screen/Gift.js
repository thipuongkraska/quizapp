import React, {useState, useCallback} from "react";
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Button, ScrollView} from "react-native";
import Theme from "../assets/colors/Theme";
import YoutubePlayer from "react-native-youtube-iframe";

const Gift = props => {
    const [message, setMessage] = useState(
        <View style={styles.screen}>
        <ScrollView>
            <Text style={styles.text}>This is from Phuong:</Text>
            <Text style={styles.text}>Dear husband! Merry Christmas! I know this Christmas is not so fun for you, I know it was hard, it was heavy, but throw everything out of your mind and just enjoy the moment with me. Like everyday, being together is already special, right? We should appreciate it because we are more lucky than most people in the world. And we love each others like two psychopaths 🤯🤯🤯 Yes you are!!! Mr. John Watson. 

For the whole past year, you were a good boy (in general), and I was a villain sometimes to you, I know it. Well, I'm still trying to become better and I know you too. It's Christmas, I don't have any gift for you, so I will become the gift, give me an order or a request (just one) - something that you want me to do (or not do), I will practise it from now until your birthday 31/1/2021. Well, take it wisely haha because there are not many opportunities like this 😆🤣🤣 

If you are kind, you can open the next gift!</Text>
</ScrollView>
            <Button style={styles.fixBtn} title="Next" onPress={() => setMessage(
            <ImageBackground resizeMode={"contain"} source={require("../assets/maman1.jpg")} style={styles.letter}>
            <View style={styles.bottom}>
                <Button title="Next" style={styles.btn} 
                    onPress={()=> setMessage(
                        <ImageBackground resizeMode={"contain"} source={require("../assets/maman3.jpg")} style={styles.letter}>
                            <View style={styles.bottom}>
                                <Text style={styles.text}>If you are still kind, you can open the next gift!</Text>
                                <Button title="Next" style={styles.fixBtn} onPress={() => {
                                   return props.onVideo();
                                }} />
                            </View>
                        </ImageBackground>
                    )}
                />
            </View>
            </ImageBackground>
            )} />
        </View>
    );
    return(
        <ImageBackground source={require("../assets/dear.png")} style={styles.background} blurRadius={2}>
            {message}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    letter: {
        top:0,
        alignItems: "center",
        width: "100%",
    },
    screen: {
        marginVertical: 30,
        width: "90%",
        height: 600,
        padding: 30,
        backgroundColor: Theme.font,
        opacity: 0.6,
        alignItems: "center",
        borderRadius: 20,
    },
    text: {
        fontFamily: "text",
        fontSize: 14,
        color: Theme.carot,
    },
    img: {
        width: "100%",
        height: "90%"
    },
    btn: {
        color:"red"
    },
    bottom: {
        marginTop: 580,
    },
    fixBtn: {
        position: "absolute",
        marginTop: 650,
    }
})

export default Gift;