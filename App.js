import * as React from 'react';
import { Text, View, StyleSheet, Button,LogBox } from 'react-native';
import Constants from 'expo-constants';
import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded
} from 'expo-ads-admob'

LogBox.ignoreAllLogs(false)

const bannerId = 'ca-app-pub-3940256099942544/6300978111'
export default class App extends React.Component {

    componentDidMount() {
        this.setTestID
    }

    setTestID = () => {
         setTestDeviceIDAsync('EMULATOR');
    }


    showInterstitialAd = async () => {
        try {
            await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
            await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
            await AdMobInterstitial.showAdAsync();
        }catch (e) {
            console.log(e)
        }

  };
/**/
  showRewardedAd = async () => {
      try {
          AdMobRewarded.setAdUnitID('ca-app-pub-3940256099942544/5224354917'); // Test ID, Replace with your-admob-unit-id
          await AdMobRewarded.requestAdAsync();
          await AdMobRewarded.showAdAsync();
      }catch (e) {
       console.log(e)
      }

  };

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.paragraph}>
              Device ID: {Constants.deviceId}
          </Text>
          <Button
              onPress={this.showInterstitialAd}
              title="Interstitial ad"
          />
          <Button
              onPress={this.showRewardedAd}
              title="Rewarded ad"
          />
          <Text>AdMobBanner</Text>
          <AdMobBanner
              bannerSize="fullBanner"
              adUnitID={bannerId} // Test ID, Replace with your-admob-unit-id
              servePersonalizedAds // true or false
          />
          <Text>PublisherBanner</Text>

          <PublisherBanner
              bannerSize="fullBanner"
              adUnitID={bannerId} // Test ID, Replace with your-admob-unit-id
          />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
