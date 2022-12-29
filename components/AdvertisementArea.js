import { View, Text, Platform } from 'react-native'
import React from 'react'
import { BannerAd , BannerAdSize ,TestIds} from '@react-native-firebase/admob'

const BannerCode = (Platform.OS == "android") ? "ca-app-pub-2976719493824952/9759891245" : ""
const AdvertisementArea = () => {
  return (
    <View style={{height:50,width:"100%",backgroundColor:"grey"}} >
     <BannerAd 
      unitId={TestIds.BANNER}
      size = {BannerAdSize.SMART_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly:true
      }}
     />
    </View>
  )
}

export default AdvertisementArea