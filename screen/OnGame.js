import React, {useState} from "react";
import {View, StyleSheet, Text, Button, Alert, ImageBackground, TouchableWithoutFeedback, TouchableOpacity, Image, Keyboard} from "react-native";
import QuizScreen from "../components/QuizScreen";
import Theme from "../assets/colors/Theme";
import Input from "../components/Input";

const OnGame = props => {
    const [validated, setValidated] = useState();
    const [index, setIndex] = useState(0);
    const quiz = [
        {
            question: "Which country started the tradition of putting up a Christmas tree?",
            answer1: {
                name: "Germany",
                value: true,
            },
            answer2: {
                name: "England",
                value: false
            },
            answer3: {
                name: "Finland",
                value: false
            }
        },
        {
            question: "In which Xmas movie does Tom Hanks play 6 of the characters?",
            answer1: {
                name: "Home Alone",
                value: false
            },
            answer2: {
                name: "The Polar Express",
                value: true
            },
            answer3: {
                name: "Friends",
                value: false
            }
        },
        {
            question: "In which country is it tradition to eat KFC for Christmas dinner?",
            answer1: {
                name: "America",
                value: false
            },
            answer2: {
                name: "Japan",
                value: true
            },
            answer3: {
                name: "France",
                value: false
            }
        },
        {
            question: "What colour suit did Santa wear until Coca Cola rebrand him in red?",
            answer1: {
                name:"green",
                value: true
            },
            answer2: {
                name:"yellow",
                value: false
            },
            answer3: {
                name:"white",
                value: false
            }
        },
        {
            question: "What decoration do Elves traditionally have on their shoes?",
            answer1: {
                name:"lace",
                value: false
            },
            answer2: {
                name:"flower",
                value: false
            },
            answer3: {
                name:"bells",
                value: true
            }
        },
        {
            question:" In Harry Potter and Philsopher's Stone, what do The Dursleys give Harry for Christmas?",
            answer1: {
                name:"Clothes",
                value: false
            },
            answer2: {
                name:"A 50-pence piece",
                value: true
            },
            answer3: {
                name:"A ticket",
                value: false
            }
        },
        {
            question: "In which children TV show that the first season, it was always winter but never Christmas?",
            answer1: {
                name:"Narnia",
                value: true
            },
            answer2: {
                name:"Frozen",
                value: false,
            },
            answer3: {
                name:"The Polar Express",
                value: false
            }
        },
        {
            question: "In Harry Potter - The Goblet of Fire, who did Harry end up going to the Yule Ball with in Xmas Day?",
            answer1: {
                name:"Parvati Patil",
                value: true
            },
            answer2: {
                name:"Cho Chang",
                value: false
            },
            answer3: {
                name:"Hermione",
                value: false
            }
        },
        {
            question: "What comes next in Wham's song - Last Christmas: 'Once bitten, and twice shy, I keep my distance...' ",
            answer1: {
                name: "and I give it to someone special",
                value: false
            },
            answer2: {
                name: "and save me from tears",
                value: false
            },
            answer3: {
                name: "but you still catch my eyes",
                value: true
            }
        },
        {
            question: "What does Harry receive from Dumbledore during his first Christmas at Hogwarts?",
            answer1: {
                name:"Cloak of Invisibility",
                value: true
            },
            answer2: {
                name:"Nimbus 2000",
                value: false
            },
            answer3: {
                name:"The mirror of Erised",
                value: false
            }
        }
    ];
    const [message, setMessage] = useState("Good job! You've successfully done the Quiz. Are you ready to open your first gift? If you are ready, type one of the thing that you always like the most and I care the least?")
    const [input, setInput] = useState("");
    const [code, setCode] = useState([]);
    const focusHandler = () => {
        setMessage("Hints: This word has 4 letters");

    };
    const changeTextHandler = (e) => {
        setInput(e);
        setCode(e);
    }
    let output;
    if (index > 9) {return output=
    <ImageBackground style={styles.background} source={require("../assets/dear.png")} blurRadius={2} >
    <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
    <QuizScreen>
        <Text style={styles.finishText} color={Theme.carot}>{message}</Text>
        <Input onFocus={focusHandler} value={input} onChangeText={changeTextHandler}/>
            <TouchableOpacity onPress={
                () => {
                    console.log(code);
                    if(code==="FOOD") {
                        return props.onGift();
                    } else {Alert.alert("Nope!", "Read again the hint", [{text:"Try again", style:"cancel"}]); return;}
                }
            }>
                <Image source={require("../assets/fly.png")} style={styles.button}/>
            </TouchableOpacity>
    </QuizScreen>
    </TouchableWithoutFeedback>
    </ImageBackground>
    }
    else {let ques = quiz[index]
    const quizHandler = (value) => {
        if (value) {
            setIndex(curNum => curNum +1);
        } else {
            Alert.alert("Nope!!!","You dismiss 1 point", [{text: "Ok", style: "cancel"}]);
            return;
        }
    }
    output = <View>
    <Text style={styles.text}>{ques.question}</Text>
    <View style={styles.btn} ><Button color={Theme.contrast} title={ques.answer1.name} 
    onPress={quizHandler.bind(this, ques.answer1.value)}/></View>
    <View style={styles.btn} ><Button color={Theme.contrast} title={ques.answer2.name} 
    onPress={quizHandler.bind(this, ques.answer2.value)}/></View>
    <View style={styles.btn} ><Button color={Theme.contrast} title={ques.answer3.name} 
    onPress={quizHandler.bind(this, ques.answer3.value)}/></View>
</View> 
    }
    return(<QuizScreen style={styles.screen}>
        {output}
    </QuizScreen>)
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "black"
    },
    text: {
        fontFamily: "text",
        fontSize: 18,
        color: Theme.contrast,
    },
    btn: {
        marginVertical: 10,
        alignItems: "center",
        justifyContent: "space-around",
    },
    finishText: {
        color: Theme.carot,
        fontFamily: "hp-theme",
        fontSize: 18,
    },
    background: {
        alignItems: "center",
        width: "100%",
        height: "100%",  
    },
    button: {
        marginTop: 15,
        width: 50, 
        height: 50,
        borderRadius: 25,
        backgroundColor: "transparent"
    }
})


export default OnGame;