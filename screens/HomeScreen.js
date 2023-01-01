import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, AppRegistry } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Timer from '../components/Timer';
import moment from "moment";

import {
  useRingerMode,
  RINGER_MODE,
  checkDndAccess,
  requestDndAccess,
  getRingerMode,
} from 'react-native-ringer-mode';
import AdvertisementArea from '../components/AdvertisementArea';

const modeText = {
  [RINGER_MODE.silent]: 'Silent',
  [RINGER_MODE.normal]: 'Normal',
  [RINGER_MODE.vibrate]: 'Vibrate',
};


//const BannerCode = (Platform.OS == "android") && "ca-app-pub-2976719493824952/9759891245" 

const HomeScreen = () => {
  const [currenttime, setcurrenttime] = useState(moment().format("HH:mm"))
  const { mode, error, setMode } = useRingerMode();

  const [date, setDate] = useState(new Date())


  const MINUTE_MS = 60000;

  const time1 = moment(currenttime, "HH:mm")
  const time2 = moment(son, "HH:mm")
  const subtract = time2.diff(time1);
  
  



  useEffect(() => {
    const interval = setInterval(() => {
      setcurrenttime(moment().format("HH:mm"))

    }, MINUTE_MS);
 
    if (currenttime == son) {
      setMode(RINGER_MODE.normal)
    }
    

    (async () => {
      try {
        const currentMode = await getRingerMode();
        setMode(currentMode);
      } catch (error) {
        console.error(error);
      }
    });
   
    return () => clearInterval(interval)

  }, [currenttime])

 
  const son = date.toLocaleTimeString('it-IT').slice(0,5)

  const changeMode = async (newMode) => {


    if (currenttime < son) {


      if (newMode === RINGER_MODE.silent || mode === RINGER_MODE.silent || mode === RINGER_MODE.vibrate || newMode === RINGER_MODE.vibrate) {
        const hasDndAccess = await checkDndAccess();

        if (hasDndAccess === false) {
          
          requestDndAccess();
          return;
        }
        setMode(newMode);

      }
    } else if (currenttime > son) {
      alert("You can't choose before current time")
    }


  };



  return (
    <View style={styles.container} >
      <ImageBackground style={styles.image} source={require('../assets/images/backround.png')} >
        <Header />
        <Text style={{ color: "white" }} >Ringer Mode: {mode !== undefined ? modeText[mode] : null}</Text>
        <View style={styles.timercontainer} >

          <Text style={{ color: "orange",fontSize:16,fontFamily:"LuckiestGuy-Regular",letterSpacing:2 }} >From  {currenttime}     To  {son}</Text>

          <Timer date={date} setDate={setDate}  />

          <View style={{ flexDirection: "row" }} >
            <TouchableOpacity onPress={() => changeMode(RINGER_MODE.vibrate)} activeOpacity={0.5}
              style={[{
                borderColor: "#333333",
                marginHorizontal: 10,
                elevation: 8,
                borderWidth: 1,
                padding: 5,
                borderRadius: 15,
                width: 85,
                alignItems: "center"
              }
                , { backgroundColor: mode == RINGER_MODE.vibrate ? "green" : "transparent" }]} >

              <Text style={{ color: "white",fontFamily:"LuckiestGuy-Regular",letterSpacing:2 }} >Vibrate</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => changeMode(RINGER_MODE.silent)} activeOpacity={0.5} 
            style={[{ 
              borderColor: "#333333",
               marginHorizontal: 10,
                elevation: 8,
                 borderWidth: 1,
                  padding: 5,
                   borderRadius: 15,
                    width: 85, 
                    alignItems: "center"
                     }
                     , { backgroundColor: mode == RINGER_MODE.silent ? "green" : "transparent" }]} >

              <Text style={{ color: "white",fontFamily:"LuckiestGuy-Regular" }} > Silent</Text>
            </TouchableOpacity>
          </View>

        </View>
       <AdvertisementArea/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0E121B"
  },
  timercontainer: {
    justifyContent: "space-around",
    flex: 1,
    alignItems: "center"
  },
  image: {

    width: '100%',
    height: '100%',
    flex: 1

  }
});

export default HomeScreen

//text and icons color #00D9F6,
//splash color 192131 
