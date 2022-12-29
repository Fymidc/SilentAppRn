import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Header = () => {
  return (
    <View style={styles.container}  >
      <Text style={{fontSize:30,letterSpacing:2,color:"white",fontFamily:"LuckiestGuy-Regular"}} >Silent</Text>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        height:70,
        borderBottomWidth:1,
        borderBottomColor:"grey",
       elevation:10,
       flexDirection:"row",
       justifyContent:"space-between",
       alignItems:"center",
       paddingHorizontal:20
    },

   });

export default Header