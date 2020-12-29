import React from 'react';
import {View, Text} from 'react-native';
import Styling from '../styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const HeaderComponent = (props) => {
  return (
    <View style={Styling.headerContainer}>
      <View style={Styling.headerLeftFlex}>
        <View style={Styling.leftCircle}></View>
      </View>
      <View style={{borderLeftWidth: 1, borderLeftColor: '#000'}}></View>
      <View style={Styling.headerRightFlex}>
        <Text style={Styling.headerTextStyle}>Healthy Fruits</Text>
      </View>
    </View>
  );
};

export default HeaderComponent;
