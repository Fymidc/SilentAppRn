import { View, Text, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { AppOpenAd, InterstitialAd, RewardedAd, BannerAd, TestIds,AdEventType, BannerAdSize } from 'react-native-google-mobile-ads';


AppOpenAd.createForAdRequest(TestIds.APP_OPEN);

InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL);

RewardedAd.createForAdRequest(TestIds.REWARDED);

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2976719493824952~9472116634';


//const BannerCode = (Platform.OS == "android") ? "ca-app-pub-2976719493824952/9759891245" : ""
const AdvertisementArea = () => {

 
  

  return (
   
    <BannerAd
    unitId={adUnitId}
    size={BannerAdSize.FULL_BANNER}
    requestOptions={{
      requestNonPersonalizedAdsOnly: true,
    }}
  />
   
  )
}

export default AdvertisementArea