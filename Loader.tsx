import {SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <LottieView
        style={styles.lottieView}
        source={require('./assets/loading.json')}
        autoPlay
        loop
      />
      <Text style={{fontFamily:'Livvic-Regular', color:"gray"}}>Hava durumu yükleniyor...</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  lottieView: {
    height: 200,
  },
});

export default Loader;
