/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'user strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Camera from 'react-native-camera';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';

export default class test extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => { this.camera = cam; }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.auto}>
        </Camera>
        <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}>
        </MapView>
        <View style={styles.button}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#9b59b6' title="Capture" onPress={() => this.takePicture()}>
            <Icon name="md-radio-button-on" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3498db' title="Send My Location" onPress={() => {}}>
            <Icon name="md-send" style={styles.actionButtonIcon} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#1abc9c' title="Message" onPress={() => {}}>
            <Icon name="md-mail" style={styles.actionButtonIcon} />
          </ActionButton.Item>
        </ActionButton>
        </View>
        {/* Below is the action buttons*/}
      </View>
    )
  }

  takePicture() {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err));
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 9,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    flex: 9,
    alignItems: 'center'
  },
  button: {
    flex: 2
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});

AppRegistry.registerComponent('test', () => test);
