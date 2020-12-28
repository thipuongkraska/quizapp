import React, {useState, useCallback} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Background from "./components/Background";
import StartGame from "./screen/Startgame";
import OnGame from "./screen/OnGame";
import Gift from "./screen/Gift";
import Hyperlink from 'react-native-hyperlink';
import YoutubePlayer from "react-native-youtube-iframe";
import FixHead from "./components/FixHead";

const fetchFont = () => {
  return Font.loadAsync({
    "hp-theme": require("./assets/fonts/potter-main-font.ttf"),
    "hp-theme-second": require("./assets/fonts/Potter-main.ttf"),
    "lumos": require("./assets/fonts/Lumos.ttf"),
    "text": require("./assets/fonts/text.ttf")
  });
}



export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [ongame, setOnGame] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  const outputHandler = () => {
    return setOnGame(true);
  }
  if (!isLoaded) {
    return(
      <AppLoading startAsync={fetchFont} onFinish={() => setIsLoaded(true)} onError={(err) => console.log(err)} />
    );
  }
  let output = <StartGame onGame={outputHandler} />
  if (!isOpen) {
    if (ongame && !isDone) {
      output = <OnGame onGift={() => setIsDone(true)} />
    } else if (isDone && !isOpen) {
      output = <Gift onVideo={() => setIsOpen(true)} />
    }

    return (
      <View style={styles.container}>
      <Background>
          <Header />
          {output}
          <Footer />
      </Background>
      </View>
    );
  }
   else if (isOpen) {
     return (
       <View style={styles.screen}>
       <FixHead />
      <YoutubePlayer
      height={300}
      play={playing}
      videoId={"3PXvaLYI61g"}
      onChangeState={onStateChange}
      />
      <Footer />
      </View>
     )}
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    marginTop:0,
    height: 800,
    backgroundColor: "black",
    justifyContent: "center"
  }
});
