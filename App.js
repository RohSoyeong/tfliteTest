/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { RNCamera } from 'react-native-camera';

var prediction = [{
  stand: '1.0',
  wrong: '0.0',
  },
];

const App: () => React$Node = () => {
  var temp = prediction[0];
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Activity</Text>
        <RNCamera
          style={{width:'100%', height:500}}
          type={RNCamera.Constants.Type.front}
          captureAudio={false}
        />
        <Text style={{ fontSize: 20}}>stand = {temp.stand}</Text>
        <Text style={{ fontSize: 20}}>wrong = {temp.wrong}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
