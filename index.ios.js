/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  WebView,
  View
} from 'react-native';

import Video from 'react-native-video'

export default class pruebaVideo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video source={{uri: "http://94.102.49.237:8088/live/canaene678432/playlist.m3u8?id=68745&pk=a7c245cb9016f98f955bf8a82fafe91db50e8f5659e8d2f2e7c82dd73d791d7c"}}   // Can be a URL or a local file.
           ref={(ref) => {
             this.player = ref
           }}                             // Store reference
           rate={1.0}                     // 0 is paused, 1 is normal.
           volume={1}                   // 0 is muted, 1 is normal.
           muted={false}                  // Mutes the audio entirely.
           paused={false}                 // Pauses playback entirely.
           resizeMode="contain"             // Fill the whole screen at aspect ratio.
           repeat={true}                  // Repeat forever.
           playInBackground={false}       // Audio continues to play when app entering background.
           playWhenInactive={true}       // [iOS] Video continues to play when control or notification center are shown.
           progressUpdateInterval={250.0} // [iOS] Interval to fire onProgress (default to ~250ms)
           style={styles.backgroundVideo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ejemploVideo', () => pruebaVideo);
